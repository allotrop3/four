'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

// const Int8Array_BYTES_PER_ELEMENT = gl.Int8Array.BYTES_PER_ELEMENT;
// const Uint8Array_BYTES_PER_ELEMENT = gl.Uint8Array.BYTES_PER_ELEMENT;

class VertexArrayObject extends Entity
{
	constructor({ name = 'vertex.array.object', mesh, attributes = [] } = {})
	{
		super({ name });
		
		this.mesh = mesh;
		this.attributes = attributes.map(this.offset);
		this.stride = 0;
	}
	
	offset(attribute)
	{
		let bytes = attribute.getByteCount();
		
		return {
			object: attribute,
			offset: this.stride += bytes
		};
	}
	
	enable(attribute)
	{
		attribute.object.enable(this.stride, attribute.offset);
	}
	
	disable(attribute)
	{
		attribute.object.disable();
	}
	
	bind()
	{
		this.attributes.map(this.enable);
	}
	
	unbind()
	{
		this.attributes.map(this.disable);
	}
}

module.exports = VertexArrayObject;