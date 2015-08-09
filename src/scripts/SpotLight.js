'use strict';

var Light = require('./Light');

/**
 * SpotLight is a local light source pointing in a particular
 * direction to illuminate an area of the scene
 * @class SpotLight
 * @name Entity.Light.SpotLight
 * @extends Entity.Light
 * @param {string} [name=point.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} exponent - Light fade intensity
 * @param {number} cutoff - Light cutoff
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */
class SpotLight extends Light
{
   constructor({ name = 'spot.light', ambient, diffuse, specular, exponent, cutoff, intensity, location, direction } = {})
   {
      super({ name, ambient, diffuse, specular, intensity, location });

      /**
       * Light fade intensity
       * @var {number} Entity.Light.SpotLight.exponent
       * @private
       */
      this.exponent = exponent;

      /**
       * Light cutoff
       * @var {number} Entity.Light.SpotLight.cutoff
       * @private
       */
      this.cutoff = cutoff;

      /**
       * Light direction
       * @var {vec3} Entity.Light.SpotLight.direction
       * @default [0, 0, 0]
       * @private
       */
      this.direction = direction;
   }

   /**
    * Set spotlight shader uniform values
    * @function Entity.Light.SpotLight.bind
    * @param {Entity.Structure} structure - Light shader structure
    * @returns {undefined}
    */
   bind(structure)
   {
      super.bind(structure);

      structure.exponent.set(this.exponent);
      structure.cutoff.set(this.cutoff);
      structure.direction.set(this.direction);
   }
}

module.exports = SpotLight;