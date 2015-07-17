'use strict';

var Entity = require('./Entity');
var gl = require('./gl');

class Attribute extends Entity
{
   constructor(program, attribute, name = 'attribute')
   {
      super(name);

      this.location = gl.getAttributeLocation(program, attribute);
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