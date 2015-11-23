'use strict';

import { vec3 } from 'gl-matrix';
import Light from './Light';

class SpotLight extends Light
{
   constructor(
   {
      path,
      ambient,
      diffuse,
      specular,
      attenuation,
      exponent,
      cutoff,
      intensity,
      location,
      name = 'spot.light',
      uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 attenuation', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction', 'i type'],
      direction = vec3.fromValues(0, 0, 0)
   } = {})
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
}

export default SpotLight;