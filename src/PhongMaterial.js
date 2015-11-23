'use strict';

import LSL from './utils/LSL';
import Material from './Material';

class PhongMaterial extends Material
{
   constructor(
   {
      path,
      pattern,
      ambient,
      diffuse,
      shading,
      name = 'phong.material',
      uniforms = ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading', 'i type'],
      specular = 0xFFFFFF,
      shininess = 1
   } = {})
   {
      super({ name, path, uniforms, pattern, ambient, diffuse, shading });

      this.specular = specular;

      this.shininess = shininess;

      this.type = 1;

      this.inheritance = ['Entity', 'Structure', 'Material', 'PhongMaterial'];
   }

   get specular()
   {
      return this._specular;
   }

   set specular(specular)
   {
      this._specular = LSL(specular);
   }

   get shininess()
   {
      return this._shininess;
   }

   set shininess(shininess)
   {
      this._shininess = shininess;
   }
}

export default  PhongMaterial;