'use strict';

let Light = require('./Light');

const _name = 'point.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 attenuation', 'f intensity', 'vec3 location', 'i type'];

class PointLight extends Light
{
   constructor({ name = _name, path, uniforms = _uniforms, ambient, diffuse, specular, attenuation, intensity, location } = {})
   {
      super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

      this.attenuation = attenuation;

      this.type = 2;
      
      this.inheritance = ['Entity', 'Structure', 'Light', 'PointLight'];
   }
}

module.exports = PointLight;