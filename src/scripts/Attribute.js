'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Attribute extends Entity
{
   constructor(name = 'attribute', program, attribute, length, format = 'FLOAT', normalized = false)
   {
      super(name);

      this.attribute = `a_${attribute}`;
      this.location = gl.getAttributeLocation(program, attribute);
      this.length = length;
      this.format = gl[format];
      this.normalized = normalized;
   }

   enable(stride, offset)
   {
      let location = this.location;

      gl.enableVertexAttribArray(location);

      gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, offset);
   }

   disable()
   {
      gl.disableVertAttribArray(this.location);
   }
}

module.exports = Attribute;