'use strict';

let gl = require('./gl');
let Entity = require('./Entity');
let Attribute = require('./Attribute');

const lengths = {
   i: 1,
   f: 1,
   vec2: 2,
   vec3: 3,
   vec4: 4
};

const _name = 'vertex.array.object';
const _indexed = false;
const _view = Float32Array;
const _attributes = [];

class VertexArrayObject extends Entity
{
   constructor({ name = _name, indexed = _indexed, view = _view, attributes = _attributes } = {})
   {
      super({ name });

      this.primary = gl.createBuffer();

      this.secondary = undefined;

      this.indexed = indexed;

      this.stride = 0;

      this.view = view;

      this.attributes = attributes.map(this.generate.bind(this));
      
      this.inheritance = ['Entity', 'VertexArrayObject'];

      this.configure();
   }

   configure()
   {
      if (this.indexed)
      {
         this.secondary = gl.createBuffer();
      }
   }

   generate(qualifying)
   {
      let offset = this.stride;
      let vars = qualifying.split(' ');
      let length = lengths[vars[0]];
      let name = vars[1];
      let attribute = new Attribute({ attribute: name, length: length, offset: offset });

      this.stride += attribute.getByteCount(this.view.BYTES_PER_ELEMENT);

      return attribute;
   }

   enable(program, attribute)
   {
      attribute.enable(program, this.stride);
   }

   disable(attribute)
   {
      attribute.disable();
   }

   bind(program = false)
   {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.primary);

      if (this.indexed)
      {
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.secondary);
      }
      
      if (program)
      {
         this.attributes.map(this.enable.bind(this, program));  
      }      
   }

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