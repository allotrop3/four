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

   bind(uniforms)
   {
      uniforms.ambient.set(this.ambient);
      uniforms.diffuse.set(this.diffuse);
   }
}

module.exports = Material;