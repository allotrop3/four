'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Uniform extends Entity
{
   constructor(name = 'uniform', program, uniform, format)
   {
      super(name);

      this.uniform = `u_${uniform}`;
      this.location = gl.getUniformLocation(program, uniform);
      this.method = `uniform${format}`;
   }

   set(value)
   {
      gl[this.method](this.location, value);
   }
}

module.exports = Uniform;