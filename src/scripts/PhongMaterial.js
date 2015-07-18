'use strict';

let Material = require('./Material');

class PhongMaterial extends Material
{
   constructor(ambient, diffuse, specular, shininess = 75, shading = 'smooth', name = 'phong.material')
   {
      super(name, ambient, diffuse, shading);

      this.specular = specular;
      this.shininess = shininess;
   }

   bind(uniforms)
   {
      super.bind(uniforms);

      uniforms.specular.set(this.specular);
      uniforms.shininess.set(this.shininess);
   }
}

module.exports = PhongMaterial;