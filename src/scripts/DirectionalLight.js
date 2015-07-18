'use strict';

let Light = require('./Light');

class DirectionalLight extends Light
{
   constructor(name = 'directional.light', ambient, diffuse, specular, intensity, location, direction)
   {
      super(name, ambient, diffuse, specular, intensity, location);

      this.direction = direction;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.direction.set(this.direction);
   }
}

module.exports = DirectionalLight;