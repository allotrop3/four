'use strict';

let LSL = require('./utils/LSL');
let Structure = require('./Structure');

const _name = 'light';
const _path = 'light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'i type'];
const _ambient = 0x000000;
const _diffuse = 0xFFFFFF;
const _specular = 0xFFFFFF;
const _intensity = 1;
const _location = [0, 0, 0];

class Light extends Structure
{
   constructor({ name = _name, path = _path, uniforms = _uniforms, ambient = _ambient, diffuse = _diffuse, specular = _specular, intensity = _intensity, location = _location } = {})
   {
      super({ name, path, uniforms });

      this.ambient = LSL(ambient);

      this.diffuse = LSL(diffuse);

      this.specular = LSL(specular);

      this.intensity = intensity;

      this.location = location;

      this.type = 0;

      this.inheritance = ['Entity', 'Structure', 'Light'];
   }
}

module.exports = Light;