'use strict';

let Entity = require('./Entity');
let Uniform = require('./Uniform');

/**
 * Structure automates and simplifies the instantiation of struct
 * typed uniforms
 * @class Structure
 * @name Entity.Structure
 * @extends Entity
 * @param {Entity.Program} program - Program in which the shader uniform is used
 * @param {string} uniform - Shader structure name
 * @param {Array} [uniforms=[]] - Uniforms within structure
 */
class Structure extends Entity
{
   constructor({ name = 'structure', program, uniform, uniforms = [] })
   {
      super({ name });

      /**
       * Shader structure name
       * @var {string} Entity.Structure.uniform
       * @private
       */
      this.uniform = uniform;

      this.generate(program, uniforms);
   }

   /**
    * Locate the shader uniforms from within the given program
    * @function Entity.Uniform.generate
    * @param {Entity.Program} program - Program in which the shader uniform is used
    * @param {Array} [uniforms=[]] - Uniforms within structure
    * @returns {undefind}
    */
   generate(program, uniforms)
   {
      uniforms.map(this.instantiate.bind(this, program));
   }

   /**
    * Instantiate the uniforms
    * @callback Entity.Uniform.instantiate
    * @param {Entity.Program} program - Program in which the shader uniform is used
    * @param {string} qualifying - Shader uniform format and property name
    * @returns {undefind}
    */
   instantiate(program, qualifying)
   {
      let vars = qualifying.split(' ');
      let format = vars[0];
      let uniform = vars[1];

      this[uniform] = new Uniform({ program: program, uniform: `${this.uniform}.${uniform}`, format: format });
   }
}

module.exports = Structure;