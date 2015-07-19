'use strict';

let Entity = require('./Entity');

/**
 * Light is an global light source to illuminate the scene
 * @class Light
 * @name Light
 * @extends Entity
 * @param {string} [name=directional.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */
class Light extends Entity
{
   constructor(name = 'light', ambient, diffuse, specular, intensity = 1, location = [0, 0, 0])
   {
      super(name);

      this.ambient = ambient;
      this.diffuse = diffuse;
      this.specular = specular;
      this.intensity = intensity;
      this.location = location;
   }

   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
      uniform.specular.set(this.specular);
      uniform.intensity.set(this.intensity);
      uniform.location.set(this.location);
   }
}

module.exports = Light;