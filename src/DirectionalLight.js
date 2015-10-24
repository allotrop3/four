'use strict';

let Light = require('./Light');

const _name = 'directional.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction', 'i type'];
const _direction = [0, 0, 0];

class DirectionalLight extends Light
{
   constructor({ name = _name, path, uniforms = _uniforms, ambient, diffuse, specular, intensity, location, direction = _direction } = {})
   {
      super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

      this.direction = direction;

      this.type = 1;

      this.inheritance = ['Entity', 'Structure', 'Light', 'DirectionalLight'];
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

module.exports = DirectionalLight;