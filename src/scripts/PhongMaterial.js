'use strict';

let Material = require('./Material');

class PhongMaterial extends Material
{
   constructor(ambient, diffuse, specular, shininess = 75, shading = 'smooth', name = 'phong.material')
   {
      super(ambient, diffuse, shading, name);

      this.specular = specular;
      this.shininess = shininess;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.specular.set(this.specular);
      uniform.shininess.set(this.shininess);
   }
}

module.exports = PhongMaterial;