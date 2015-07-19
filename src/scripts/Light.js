'use strict';

let Entity = require('./Entity');

/**
 * Light is a global light source to illuminate the scene
 * @class Light
 * @name Entity.Light
 * @extends Entity
 * @param {string} [name=light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */
class Light extends Entity
{
   constructor({ name = 'light', ambient, diffuse, specular, intensity = 1, location = [0, 0, 0] } = {})
   {
      super({ name });

      /**
       * Ambient component
       * @var {vec3}Entity.Lightambient
       * @private
       */
      this.ambient = ambient;

      /**
       * Diffuse component
       * @var {vec3} Entity.Light.diffuse
       * @private
       */
      this.diffuse = diffuse;

      /**
       * Specular component
       * @var {vec3} Entity.Light.specular
       * @private
       */
      this.specular = specular;

      /**
       * Light intensity
       * @var {number} Entity.Light.intensity
       * @default 1
       * @private
       */
      this.intensity = intensity;

      /**
       * Light position
       * @var {vec3} Entity.Light.location
       * @default [0, 0, 0]
       * @private
       */
      this.location = location;
   }

   /**
    * Set global light shader uniform values
    * @function Entity.Light.bind
    * @param {object} uniform - Light shader uniforms
    * @returns {undefined}
    */
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