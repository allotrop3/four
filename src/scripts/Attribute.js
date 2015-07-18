'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Attribute extends Entity
{
   constructor(program, attribute, length, format = 'FLOAT', normalized = false, name = 'attribute')
   {
      super(name);

      this.attribute = `a_${attribute}`;
      this.location = gl.getAttributeLocation(program, attribute);
      this.length = length;
      this.format = gl[format];
      this.normalized = normalized;
   }

   bind(stride, offset)
   {
      this.enable();

      gl.vertexAttribPointer(this.location, this.length, this.format, this.normalized, stride, offset);
   }

   enable()
   {
      gl.enableVertexAttribArray(this.location);
   }

   disable()
   {
      gl.disableVertAttribArray(this.location);
   }
}

module.exports = Attribute;