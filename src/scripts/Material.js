'use strict';

let Structure = require('./Structure');

const shades = { flat: 1, smooth: 0 };

const _name = 'material';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'i shading'];
const _shading = 'smooth';

/**
 * Materials dictate the mesh shading
 * @class Material
 * @name Entity.Structure.Material
 * @extends Entity.Structure
 * @param {string} [name=material] - Instance name
 * @param {Entity.Program} program - Uniforms' program
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {string} [shading=smooth] - Surface shading method
 */
class Material extends Structure
{
   constructor({ name = _name, uniforms = _uniforms, program, ambient, diffuse, shading = _shading } = {})
   {
      super({ name, program, path: 'material', uniforms });

      /**
       * Ambient component
       * @var {vec3} Entity.Structure.Material.ambient
       * @private
       */
      this.ambient = ambient;

      /**
       * Diffuse component
       * @var {vec3} Entity.Structure.Material.diffuse
       * @private
       */
      this.diffuse = diffuse;

      /**
       * Surface shading method
       * @var {string} Entity.Structure.Material.shading
       * @default smooth
       * @private
       */
      this.shading = shades[shading];
   }
}

module.exports = Material;