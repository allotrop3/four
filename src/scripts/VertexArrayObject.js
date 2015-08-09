'use strict';

let Entity = require('./Entity');
let Attribute = require('./Attribute');
let gl = require('./gl');
const lengths = {
   i: 1,
   f: 1,
   vec2: 2,
   vec3: 3,
   vec4: 4
};

/**
 * VertexArrayObject retains the attributes associated with
 * the rendering for an associated mesh, therefore providing a handler
 * to manage their referencing in the vertex shader at render time
 * @class VertexArrayObject
 * @name Entity.VertexArrayObject
 * @extends Entity
 * @param {string} [name=vertex.array.object] - Instance name
 * @param {boolean} [indexed=false] - Flag element array usage
 * @param {ArrayBuffer} [view=Float32Array] - Mesh array buffer data view
 * @param {Array} [attributes=[]] - Mesh vertex attributes
 */
class VertexArrayObject extends Entity
{
   constructor({ name = 'vertex.array.object', program, indexed = false, view = Float32Array, attributes = [] } = {})
   {
     super({ name });

     /**
      * Mesh vertex array buffer
      * @var {WebGLBuffer} Entity.VertexArrayObject.buffer
      * @private
      */
     this.buffer = gl.createBuffer();

     /**
      * Mesh element array buffer
      * @var {WebGLBuffer} Entity.VertexArrayObject.eBuffer
      * @private
      */
     this.eBuffer = gl.createBuffer();

     /**
      * Enable/disable element array buffer
      * driven rendering
      * @var {boolean} Entity.VertexArrayObject.indexed
      * @private
      * @default false
      */
     this.indexed = indexed;

     /**
      * Mesh vertex attributes byte count
      * @var {number} Entity.VertexArrayObject.stride
      * @private
      * @default 0
      */
     this.stride = 0;

     /**
      * Mesh array buffer data precision
      * @var {ArrayBuffer} Entity.VertexArrayObject.view
      * @private
      * @default Float32Array
      */
     this.view = view;

     /**
      * Mesh vertex attributes
      * @var {Array} Entity.VertexArrayObject.attributes
      * @private
      */
     this.attributes = attributes.map(this.generate.bind(this, program));
  }

   /**
    * Compute the byte offset for a given
    * vertex attribute attribute within the
    * vertex array buffer object
    * @function Entity.VertexArrayObject.generate
    * @param {Entity.Attribute} attribute - Vertex attribute to evaluate
    * @returns {object}
    */
   generate(program, qualifying)
   {
      let offset = this.stride;
      let vars = qualifying.split(' ');
      let length = lengths[vars[0]];
      let name = vars[1];
      let attribute = new Attribute({ program: program, attribute: name, length: length, offset: offset });

      this.stride += attribute.getByteCount(this.view.BYTES_PER_ELEMENT);

      return attribute;
   }

   /**
    * Enable the given vertex attribute
    * @callback Entity.VertexArrayObject.enable
    * @param {Entity.Attribute} attribute - Vertex attribute to enable
    * @returns {undefined}
    */
   enable(attribute)
   {
      attribute.enable(this.stride, attribute.offset);
   }

   /**
    * Disable the given vertex attribute
    * @callback Entity.VertexArrayObject.disable
    * @param {Entity.Attribute} attribute - Vertex attribute to disable
    * @returns {undefined}
    */
   disable(attribute)
   {
      attribute.disable();
   }

   /**
    * Bind and enable the vertex buffer object
    * and attributes respectively
    * @function Entity.VertexArrayObject.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

      if (this.indexed)
      {
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.eBuffer);
      }

      this.attributes.map(this.enable.bind(this));
   }

   /**
    * Unbind and disable the vertex buffer object
    * and attributes respectively
    * @function Entity.VertexArrayObject.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindBuffer(gl.ARRAY_BUFFER, null);

      if (this.indexed)
      {
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      }

      this.attributes.map(this.disable);
   }
}

module.exports = VertexArrayObject;