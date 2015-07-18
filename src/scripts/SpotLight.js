'use strict';

var Light = require('./Light');

class SpotLight extends Light
{
   constructor(name = 'spot.light', ambient, diffuse, specular, exponent, cutoff, intensity, location, direction)
   {
      super(name, ambient, diffuse, specular, intensity, location);

      this.exponent = exponent;
      this.cutoff = cutoff;
      this.direction = direction;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.exponent.set(this.exponent);
      uniform.cutoff.set(this.cutoff);
      uniform.direction.set(this.direction);
   }
}

module.exports = SpotLight;