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
		this.attributes = this.generate(attributes);
		this.stride = 0;
	}
	
	generate(attributes)
	{
		let config = [];
		let offset = 0;
		
		for (let index in attributes)
		{
			let attribute = attributes[index];
			let bytes = attribute.getByteCount();
			
			config.push({
				attribute: attribute,
				offset: offset += bytes
			});
			
			this.stride += bytes;
		}
		
		return config;
	}
	
	enable(attribute)
	{
		attribute.attribute.enable(attribute.stride, attribute.offset);
	}
	
	disable(attribute)
	{
		attribute.attribute.disable();
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