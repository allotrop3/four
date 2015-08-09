'use strict';

let Material = require('./Material');

/**
 * Phong shading using the Blinn-Phong shading model
 * @class PhongMaterial
 * @name Entity.Material.PhongMaterial
 * @extends Entity.Material
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
       * @var {vec3} Entity.Material.PhongMaterial.specular
       * @private
       */
      this.specular = specular;

      /**
       * Surface light reflectivity
       * @var {number} Entity.Material.PhongMaterial.shininess
       * @default 75
       * @private
       */
      this.shininess = shininess;
   }

   /**
    * Set phong material shader uniform values
    * @function Entity.Material.PhongMaterial.bind
    * @param {Entity.Structure} structure - Material shader structure
    * @returns {undefined}
    */
   bind(structure)
   {
      super.bind(structure);

      structure.shininess.set(this.shininess);
   }
}

module.exports = PhongMaterial;