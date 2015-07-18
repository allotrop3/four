'use strict';

let Entity = require('./Entity');

class Light extends Entity
{
   constructor(name = 'light', ambient, diffuse, specular, intensity = 1, location)
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.intensity = intensity;
      this.location = location;
   }

   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
      uniform.specular.set(this.specular);
      uniform.intensity.set(this.intensity);
      uniform.location.set(this.location);
   }
}

module.exports = Light;