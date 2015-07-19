'use strict';

let Entity = require('./Entity');
let shades = { flat: 1, smooth: 0 };

/**
 * Materials dictate the mesh shading
 * @class Material
 * @name Material
 * @extends Entity
 * @param {string} [name=material] - Instance name
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {string} [shading=smooth] - Surface shading method
 */
class Material extends Entity
{
   constructor({ name = 'material', ambient, diffuse, shading = 'smooth' })
   {
      super({ name });

      /**
       * Ambient component
       * @var {vec3} Material.ambient
       * @private
       */
      this.ambient = ambient;

      /**
       * Diffuse component
       * @var {vec3} Material.diffuse
       * @private
       */
      this.diffuse = diffuse;

      /**
       * Surface shading method
       * @var {string} Material.shading
       * @default smooth
       * @private
       */
      this.shading = shades[shading];
   }

   /**
    * Set material shader uniform values
    * @function Material.bind
    * @param {object} uniform - Material shader uniforms
    * @returns {undefined}
    */
   bind(uniform)
   {
      uniform.ambient.set(this.ambient);
      uniform.diffuse.set(this.diffuse);
      uniform.shading.set(this.shading);
   }
}

module.exports = Material;