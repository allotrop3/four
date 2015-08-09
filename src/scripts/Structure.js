'use strict';

let Entity = require('./Entity');
let Uniform = require('./Uniform');

const _name = 'structure';
const _uniforms = [];

/**
 * Structure automates and simplifies the instantiation of struct
 * typed uniforms
 * @class Structure
 * @name Entity.Structure
 * @extends Entity
 * @param {Entity.Program} program - Program in which the shader uniform is used
 * @param {string} path - Struct path to uniforms
 * @param {Array} [unpathiforms=[]] - Uniforms within structure
 */
class Structure extends Entity
{
   constructor({ name = _name, program, path, uniforms = _uniforms })
   {
      super({ name });

      /**
       * Struct path to uniforms
       * @var {string} Entity.Structure.path
       * @private
       */
      this.path = path;

      /**
       * Shader uniforms
       * @var {Entity.Uniform[]} Entity.Structure.uniforms
       * @private
       */
      this.uniforms = uniforms.map(this.instantiate.bind(this, program));
   }

   /**
    * Instantiate the uniforms
    * @callback Entity.Structure.instantiate
    * @param {Entity.Program} program - Program in which the shader uniform is used
    * @param {string} qualifying - Shader uniform format and property name
    * @returns {undefind}
    */
   instantiate(program, qualifying)
   {
      let vars = qualifying.split(' ');
      let format = vars[0];
      let uniform = vars[1];

      return new Uniform({ program: program, path: this.path, uniform: uniform, format: format });
   }

   /**
    * Bind uniform values to the current progam
    * @function Entity.Structure.bind
    * @returns {undefind}
    */
   bind()
   {
      this.uniforms.map(this.set.bind(this));
   }

   /**
    * Set uniform values
    * @callback Entity.Structure.set
    * @param {Entity.Uniform} uniform - Uniform to set
    * @returns {undefind}
    */
   set(uniform)
   {
      uniform.set(this[uniform.uniform]);
   }
}

module.exports = Structure;