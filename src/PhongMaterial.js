'use strict';

let LSL = require('./utils/LSL');
let Material = require('./Material');

const _name = 'phong.material';
const _uniforms = ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading', 'i type'];
const _specular = [1, 1, 1];
const _shininess = 75;

class PhongMaterial extends Material
{
   constructor({ name = _name, path, uniforms = _uniforms, pattern, ambient, diffuse, specular = _specular, shading, shininess = _shininess } = {})
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

   get type()
   {
      return this._type;
   }

   set type(type)
   {
      this._type = type;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }
}

module.exports = PhongMaterial;