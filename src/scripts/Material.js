'use strict';

let Entity = require('./Entity');

class Material extends Entity
{
   constructor(ambient, diffuse, shading = 'smooth', name = 'material')
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.shading = shading;
   }

   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
   }
}

module.exports = Material;