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

   get attenuation()
   {
      return this._attenuation;
   }

   set attenuation(attenuation)
   {
      this._attenuation = attenuation;
   }

   get cutoff()
   {
      return this._cutoff;
   }

   set cutoff(cutoff)
   {
      this._cutoff = cutoff;
   }

   get direction()
   {
      return this._direction;
   }

   set direction(direction)
   {
      this._direction = direction;
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

module.exports = SpotLight;