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
    * @param {Entity.Structure} structure - Light shader structure
    * @returns {undefined}
    */
   bind(structure)
   {
      structure.ambient.set(this.ambient);
      structure.diffuse.set(this.diffuse);
      structure.specular.set(this.specular);
      structure.intensity.set(this.intensity);
      structure.location.set(this.location);
   }
}

module.exports = Light;