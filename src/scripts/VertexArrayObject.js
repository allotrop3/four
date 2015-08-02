'use strict';

let Entity = require('./Entity');
let gl = require('./gl');


/**
 * VertexArrayObject retains the attributes associated with 
 * the rendering for a given, therefore providing a handler
 * to manage their referencing in the vertex shader
 * @class VertexArrayObject
 * @name Entity.VertexArrayObject
 * @extends Entity
 * @param {string} [name=vertex.array.object] - Instance name
 * @param {Entity.Mesh} mesh - Mesh
 * @param {Array} [attributes=[]] - Mesh vertex attributs
 */
class VertexArrayObject extends Entity
{
	constructor({ name = 'vertex.array.object', mesh, attributes = [] } = {})
	{
		super({ name });
		
		/**
       * Mesh
       * @var {Entity.Mesh} Entity.VertexArrayObject.mesh
       * @private
       */
		this.mesh = mesh;
		
		/**
       * Mesh vertex attributes
       * @var {Array} Entity.VertexArrayObject.attributes
       * @private
       */
		this.attributes = attributes.map(this.offset);
		
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
    * @function Entity.VertexArrayObject.offset
    * @param {Entity.Attribute} attribute - Vertex attribute to evaluate
    * @returns {object}
    */
	offset(attribute)
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
    * Bind and enable the mesh and vertex attributes respectively
    * @function Entity.VertexArrayObject.bind
    * @returns {undefined}
    */
	bind()
	{
		this.attributes.map(this.enable);
	}
	
	/**
    * Unbind and disable the mesh and vertex attributes respectively
    * @function Entity.VertexArrayObject.unbind
    * @returns {undefined}
    */
	unbind()
	{
		this.attributes.map(this.disable);
	}
}

module.exports = VertexArrayObject;