'use strict';

let Entity = require('./Entity');
let gl = require('./gl');


/**
 * VertexArrayObject retains the attributes associated with 
 * the rendering for an associated mesh, therefore providing a handler
 * to manage their referencing in the vertex shader at render time
 * @class VertexArrayObject
 * @name Entity.VertexArrayObject
 * @extends Entity
 * @param {string} [name=vertex.array.object] - Instance name
 * @param {boolean} [indexed=false] - Flag element array usage
 * @param {Array} [attributes=[]] - Mesh vertex attributs
 */
class VertexArrayObject extends Entity
{
	constructor({ name = 'vertex.array.object', indexed = false, attributes = [] } = {})
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
       * Mesh vertex attributes
       * @var {Array} Entity.VertexArrayObject.attributes
       * @private
       */
		this.attributes = attributes.map(this.generate);
		
		/**
       * Mesh vertex attributes byte count
       * @var {number} Entity.VertexArrayObject.stride
       * @private
		 * @default 0
       */
		this.stride = 0;
	}
	
	/**
    * Compute the byte offset for a given 
	 * vertex attribute attribute within the
	 * vertex array buffer object
    * @function Entity.VertexArrayObject.generate
    * @param {Entity.Attribute} attribute - Vertex attribute to evaluate
    * @returns {object}
    */
	generate(attribute)
	{
		let bytes = attribute.getByteCount();
		
		return {
			object: attribute,
			offset: this.stride += bytes
		};
	}
	
	/**
    * Enable the given vertex attribute
    * @callback Entity.VertexArrayObject.enable
    * @param {Entity.Attribute} attribute - Vertex attribute to enable
    * @returns {undefined}
    */
	enable(attribute)
	{
		attribute.object.enable(this.stride, attribute.offset);
	}
	
	/**
    * Disable the given vertex attribute
    * @callback Entity.VertexArrayObject.disable
    * @param {Entity.Attribute} attribute - Vertex attribute to disable
    * @returns {undefined}
    */
	disable(attribute)
	{
		attribute.object.disable();
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
		
		this.attributes.map(this.enable);
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