'use strict';

let Entity = require('./Entity');
let shades = { flat: 1, smooth: 0 };

class Material extends Entity
{
   constructor(name = 'material', ambient, diffuse, shading = 'smooth')
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.shading = shades[shading];
   }

   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
      uniform.shading.set(this.shading);
   }
}

module.exports = Material;