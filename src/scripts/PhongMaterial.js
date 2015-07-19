'use strict';

let Material = require('./Material');

/**
 * Phong shading using the Blinn-Phong shading model
 * @class PhongMaterial
 * @name PhongMaterial
 * @extends Material
 * @param {string} [name=phong.material] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {string} [shading=smooth] - Surface shading method
 * @param {number} [shininess=75] - Surface light reflectivity
 */
class PhongMaterial extends Material
{
   constructor({ name = 'phong.material', ambient, diffuse, specular, shading, shininess = 75 } = {})
   {
      super({ name, ambient, diffuse, shading });

      /**
       * Specular component
       * @var {vec3} PhongMaterial.specular
       * @private
       */
      this.specular = specular;

      /**
       * Surface light reflectivity
       * @var {number} PhongMaterial.shininess
       * @default 75
       * @private
       */
      this.shininess = shininess;
   }

   /**
    * Set phong material shader uniform values
    * @function PhongMaterial.bind
    * @param {object} uniform - Phong material shader uniforms
    * @returns {undefined}
    */
   bind(uniform)
   {
      super.bind(uniform);

      uniform.shininess.set(this.shininess);
   }
}

module.exports = PhongMaterial;