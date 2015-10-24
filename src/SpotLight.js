'use strict';

let Light = require('./Light');

const _name = 'spot.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 attenuation', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction', 'i type'];
const _direction = [0, 0, 0];

class SpotLight extends Light
{
   constructor({ name = _name, path, uniforms = _uniforms, ambient, diffuse, specular, attenuation, exponent, cutoff, intensity, location,  direction = _direction } = {})
   {
      super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

      this.attenuation = attenuation;

      this.exponent = exponent;

      this.cutoff = cutoff;

      this.direction = direction;

      this.type = 3;

      this.inheritance = ['Entity', 'Structure', 'Light', 'SpotLight'];
   }
}

module.exports = SpotLight;