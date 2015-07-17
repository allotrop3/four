'use strict';

var Entity = require('./Entity');
var gl = require('./gl');

class Uniform extends Entity
{
   constructor(program, uniform, format, name = 'uniform')
   {
      super(name);

      this.uniform = gl.getUniformLocation(program, uniform);
      this.method = `uniform${format}`;
   }

   set(value)
   {
      gl[this.method](this.location, value);
   }
}

module.exports = Uniform;