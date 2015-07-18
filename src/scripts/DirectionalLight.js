'use strict';

let Light = require('./Light');

class DirectionalLight extends Light
{
   constructor(ambient, diffuse, specular, location, direction, name = 'directional.light')
   {
      super(name);

      this.direction = direction;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.direction.set(this.direction);
   }
}

module.exports = DirectionalLight;