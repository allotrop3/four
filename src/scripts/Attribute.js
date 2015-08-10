'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'attribute';
const _format = gl.FLOAT;
const _normalized = false;
const _offset = 0;

/**
 * This provides a wrapper to simplify locating, enabling and disabling generic vertex attributes.
 * Vertex attributes are used to communicate from "outside" to the vertex shader. Unlike uniform variables,
 * values are provided per vertex (and not globally for all vertices). Each generic vertex attribute array
 * is initially disabled and isn't accessed when <code>gl[drawElements|drawArrays]</code> is called.
 * @class Attribute
 * @name Entity.Attribute
 * @extends Entity
 * @param {string} [name=attribute] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the generic vertex attribute is used.
 * @param {string} attribute - Specifies the generic vertex attribute name as used in the shader.
 * @param {number} length - Specifies the number of components per generic vertex attribute. Must be 1, 2, 3, 4.
 * @param {number} [format=gl.FLOAT] - Specifies the data type of each component in the array.
 * @param {boolean} [normalized=false] - Specifies whether fixed-point data values should be normalized
 * (true) or converted directly as fixed-point values (false) when they are accessed.
 * @param {number} [offset=0] - Specifies the offset of the first component of the first generic vertex
 * attribute in the array in the data store of the buffer currently bound to the <code>gl.ARRAY_BUFFER</code>.
 * The initial value is 0.
 */
class Attribute extends Entity
{
   constructor({ name = _name, program, attribute, length, format = _format, normalized = _normalized, offset = _offset } = {})
   {
      super({ name });

      /**
       * Vertex attribute variable name as used in the shader.
       * @var {object} Entity.Attribute.attribute
       */
      this.attribute = attribute;

      /**
       * The index of the generic vertex attribute.
       * @var {number} [Entity.Attribute.location=WebGLAttributeLocation]
       */
      this.location = gl.getAttribLocation(program.buffer, `a_${attribute}`);

      /**
       * Number of components per generic vertex attribute. Must be 1, 2, 3, 4.
       * @var {number} Entity.Attribute.length
       */
      this.length = length;

      /**
       * The data type of each component in the array.
       * @var {number} [Entity.Attribute.format=gl.FLOAT]
       */
      this.format = format;

      /**
       * Specifies whether fixed-point data values should be normalized (<code>true</code>)
       * or converted directly as fixed-point values (<code>false</code>) when they are accessed.
       * @var {number} [Entity.Attribute.normalized=false]
       */
      this.normalized = normalized;

      /**
       * The offset of the first component of the first generic
       * vertex attribute in the array in the data store of the
       * buffer currently bound to the <code>gl.ARRAY_BUFFER</code>. The
       * initial value is 0.
       * @var {number} [Entity.Attribute.offset=0]
       */
      this.offset = offset;
   }

   /**
    * Compute and return the number of occupying bytes.
    * @function Entity.Attribute.getByteCount.
    * @param {number} bytes - Bytes per component.
    * @returns {number}
    */
   getByteCount(bytes)
   {
      return this.length * bytes;
   }

   /**
    * Enable generic vertex attribute and define an array of generic vertex attribute data.
    * @function Entity.Attribute.enable
    * @param {number} [stride=0] - Specifies the byte offset between consecutive
    * generic vertex attributes. If stride is 0, the generic vertex attributes
    * are understood to be tightly packed in the array. The initial value is 0.
    * @returns {undefined}
    */
   enable(stride = 0)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
   }

   /**
    * Disable generic vertex attribute array.
    * @function Entity.Attribute.disable
    * @returns {undefined}
    */
   disable()
   {
      gl.disableVertexAttribArray(this.location);
   }
}

module.exports = Attribute;