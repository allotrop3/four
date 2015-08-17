'use strict';

let LSL = require('./utils/LSL');
let Material = require('./Material');

const _name = 'phong.material';
const _uniforms = ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading', 'i type'];
const _specular = [1, 1, 1];
const _shininess = 75;

class PhongMaterial extends Material
{
   constructor({ name = _name, program, path, uniforms = _uniforms, pattern, ambient, diffuse, specular = _specular, shading, shininess = _shininess } = {})
   {
      super({ name, program, path, uniforms, pattern, ambient, diffuse, shading });

      this.specular = LSL(specular);

      this.shininess = shininess;

      this.type = 1;
   }
}

module.exports = PhongMaterial;