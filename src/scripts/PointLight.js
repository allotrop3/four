'use strict';

let Light = require('./Light');

/**
 * PointLight is a local light source to illuminate an area of the scene
 * @class PointLight
 * @name Entity.Light.PointLight
 * @extends Entity.Light
 * @param {string} [name=point.light] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {vec3} coefficient - Coefficient component
 * @param {vec3} linear - Linear component
 * @param {vec3} quadratic - Quadratic component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */
class PointLight extends Light
{
   constructor({ name = 'point.light', ambient, diffuse, specular, coefficient, linear, quadratic, intensity, location } = {})
   {
      super({ name, ambient, diffuse, specular, intensity, location });

      /**
       * Coefficient component
       * @var {vec3} Entity.Light.PointLight.coefficient
       * @private
       */
      this.coefficient = coefficient;

      /**
       * Linear component
       * @var {vec3} Entity.Light.PointLight.linear
       * @private
       */
      this.linear = linear;

      /**
       * Quadratic component
       * @var {vec3} Entity.Light.PointLight.quadratic
       * @private
       */
      this.quadratic = quadratic;
   }

   /**
    * Set point light shader uniform values
    * @function Entity.Light.PointLight.bind
    * @param {Entity.Structure} structure - Light shader structure
    * @returns {undefined}
    */
   bind(structure)
   {
      super.bind(structure);

      structure.coefficient.set(this.coefficient);
      structure.linear.set(this.linear);
      structure.quadratic.set(this.quadratic);
      structure.location.set(this.location);
   }
}

module.exports = PointLight;