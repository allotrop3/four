'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Attribute is a wrapper on shader vertex attributes
 * @class Attribute
 * @name Entity.Attribute
 * @extends Entity
 * @param {string} [name=attribute] - Instance name
 * @param {Entity.Program} [program] - Program in which the vertex attribute is used
 * @param {string} attribute - Shader variable name
 * @param {number} length - Number of components
 * @param {number} [format=gl.FLOAT] - Component data format
 * @param {boolean} [normalized=false] - Force normalized components
 */
class Attribute extends Entity
{
   constructor({ name = 'attribute', program, attribute, length, format = gl.FLOAT, normalized = false } = {})
   {
      super({ name });

      /**
       * Shader variable name
       * @var {object} [Entity.Attribute.attribute=a_${Framebuffer.attribute}]
       * @private
       */
      this.attribute = `a_${attribute}`;

      /**
       * Shader vertex attribute location
       * @var {number} [Entity.Attribute.location=gl.getAttributeLocation]
       * @private
       */
      this.location = gl.getAttribLocation(program.buffer, this.attribute);

      /**
       * Number of components
       * @var {number} Entity.Attribute.length
       * @private
       */
      this.length = length;

      /**
       * Component data format
       * @var {number} [Entity.Attribute.format=gl.FLOAT]
       * @private
       */
      this.format = format;

      /**
       * Force normalized components
       * @var {number} [Entity.Attribute.normalized=false]
       * @private
       */
      this.normalized = normalized;
   }

   /**
    * Compute total number of bytes
    * @function Entity.Attribute.getByteCount
    * @param {number} bytes – Bytes per element
    * @returns {number}
    */
   getByteCount(bytes)
   {
      return this.length * bytes;
   }

   /**
    * Enable vertex attribute and configure
    * its pointer on the bound VBO
    * @function Entity.Attribute.enable
    * @returns {undefined}
    */
   enable(stride, offset)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, offset);
   }

   /**
    * Disable vertex attribute
    * @function Entity.Attribute.disable
    * @returns {undefined}
    */
   disable()
   {
      gl.disableVertexAttribArray(this.location);
   }
}

module.exports = Attribute;