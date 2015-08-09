'use strict';

let Material = require('./Material');

const _name = 'phong.material';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f shininess', 'i shading'];
const _shininess = 75;

/**
 * Phong shading using the Blinn-Phong shading model
 * @class PhongMaterial
 * @name Entity.Structure.Material.PhongMaterial
 * @extends Entity.Structure.Material
 * @param {string} [name=phong.material] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {string} [shading=smooth] - Surface shading method
 * @param {number} [shininess=75] - Surface light reflectivity
 */
class PhongMaterial extends Material
{
   constructor({ name = _name, uniforms = _uniforms, ambient, diffuse, specular, shading, shininess = _shininess } = {})
   {
      super({ name, program, uniforms, ambient, diffuse, shading });

      /**
       * Specular component
       * @var {vec3} Entity.Structure.Material.PhongMaterial.specular
       * @private
       */
      this.specular = specular;

      /**
       * Surface light reflectivity
       * @var {number} Entity.Structure.Material.PhongMaterial.shininess
       * @default 75
       * @private
       */
      this.shininess = shininess;
   }
}

module.exports = PhongMaterial;