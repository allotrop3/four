'use strict';

import Light from './Light';

const _name = 'point.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f radius', 'f intensity', 'vec3 location', 'i type'];
const _radius = 10;
const _intensity = 10;

class PointLight extends Light
{
   constructor({ name = _name, path, uniforms = _uniforms, ambient, diffuse, specular, radius = _radius, intensity = _intensity, location } = {})
   {
      super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

      this.radius = radius;

      this.type = 2;

      this.inheritance = ['Entity', 'Structure', 'Light', 'PointLight'];
   }

   get radius()
   {
      return this._radius;
   }

   set radius(radius)
   {
      this._radius = radius;
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

export default PointLight;