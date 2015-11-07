'use strict';

import gl from './gl';
import Entity from './Entity';
import Attribute from './Attribute';

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

      this.attributes = attributes;

      this.inheritance = ['Entity', 'VertexArrayObject'];

      this.configure();
   }

   get primary()
   {
      return this._primary;
   }

   set primary(primary)
   {
      this._primary = primary;
   }

   get secondary()
   {
      return this._secondary;
   }

   set secondary(secondary)
   {
      this._secondary = secondary;
   }

   get indexed()
   {
      return this._indexed;
   }

   set indexed(indexed)
   {
      this._indexed = indexed;
   }

   get stride()
   {
      return this._stride;
   }

   set stride(stride)
   {
      this._stride = stride;
   }

   get view()
   {
      return this._view;
   }

   set view(view)
   {
      this._view = view;
   }

   get attributes()
   {
      return this._attributes;
   }

   set attributes(attributes)
   {
      this._attributes = attributes.map(this.generate.bind(this));
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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

export default VertexArrayObject;