'use strict';

import LSL from './utils/LSL';
import Structure from './Structure';

const _name = 'light';
const _path = 'light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'i type'];
const _ambient = 0x000000;
const _diffuse = 0xFFFFFF;
const _specular = 0xFFFFFF;
const _intensity = 1;
const _location = [-10, 10, -10];

class Light extends Structure
{
   constructor({ name = _name, path = _path, uniforms = _uniforms, ambient = _ambient, diffuse = _diffuse, specular = _specular, intensity = _intensity, location = _location } = {})
   {
      super({ name, path, uniforms });

      this.ambient = ambient;

      this.diffuse = diffuse;

      this.specular = specular;

      this.intensity = intensity;

      this.location = location;

      this.type = 0;

      this.inheritance = ['Entity', 'Structure', 'Light'];
   }

   get ambient()
   {
      return this._ambient;
   }

   set ambient(ambient)
   {
      this._ambient = LSL(ambient);
   }

   get diffuse()
   {
      return this._diffuse;
   }

   set diffuse(diffuse)
   {
      this._diffuse = LSL(diffuse);
   }

   get specular()
   {
      return this._specular;
   }

   set specular(specular)
   {
      this._specular = LSL(specular);
   }

   get intensity()
   {
      return this._intensity;
   }

   set intensity(intensity)
   {
      this._intensity = intensity;
   }

   get location()
   {
      return this._location;
   }

   set location(location)
   {
      this._location = location;
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

export default Light;