'use strict';

let Light = require('./Light');

/**
 * DirectionalLight is a directional light source to illuminate the scene
 * @class DirectionalLight
 * @name Entity.Light.DirectionalLight
 * @extends Entity.Light
 * @param {string} [name=directional.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */
class DirectionalLight extends Light
{
   constructor({ name = 'directional.light', ambient, diffuse, specular, intensity, location, direction = [0, 0, 0] } = {})
   {
      super({ name, ambient, diffuse, specular, intensity, location });

      /**
       * Light direction
       * @var {vec3} Entity.Light.DirectionalLight.direction
       * @default [0, 0, 0]
       * @private
       */
      this.direction = direction;
   }

   /**
    * Set directional light shader uniform values
    * @function Entity.Light.DirectionalLight.bind
    * @param {object} uniform - Directional light shader uniforms
    * @returns {undefined}
    */
   bind(uniform)
   {
      super.bind(uniform);

      uniform.direction.set(this.direction);
   }
}

module.exports = DirectionalLight;