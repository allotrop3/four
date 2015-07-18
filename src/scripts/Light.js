'use strict';

let Entity = require('./Entity');

class Light extends Entity
{
   constructor(ambient, diffuse, specular, location, name = 'light')
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.location = location;
   }

   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
      uniform.specular.set(this.specular);
      uniform.location.set(this.location);
   }
}

module.exports = Light;