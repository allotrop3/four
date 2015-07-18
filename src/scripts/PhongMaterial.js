'use strict';

let Material = require('./Material');

class PhongMaterial extends Material
{
   constructor(name = 'phong.material', ambient, diffuse, specular, shading, shininess = 75)
   {
      super(name, ambient, diffuse, shading);

      this.specular = specular;
      this.shininess = shininess;
   }

   bind(uniform)
   {
      super.bind(uniform);

      uniform.shininess.set(this.shininess);
   }
}

module.exports = PhongMaterial;