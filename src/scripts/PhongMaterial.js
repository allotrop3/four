'use strict';

var Material = require('./Material');

class PhongMaterial extends Material
{
   constructor(ambient, diffuse, specular, shininess = 75, shading = 'smooth', name = 'phong.material')
   {
      super(name, ambient, diffuse, shading);

      this.specular = specular;
      this.shininess = shininess;
   }
}

module.exports = PhongMaterial;