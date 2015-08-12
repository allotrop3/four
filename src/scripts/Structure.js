'use strict';

let Entity = require('./Entity');
let Uniform = require('./Uniform');

const _name = 'structure';
const _uniforms = [];

/**
 * A structure, at a high-level, is a concept that groups a collection of related uniforms
 * and their values. Alternatively, it is an abstraction layer to link client-side properties
 * with their uniform counter-part, thereby simplifying the process of updating uniforms on
 * the shader. Extensions, however, may introduce functionality bespoke to a particular
 * concept.
 * @class Structure
 * @name Entity.Structure
 * @extends Entity
 * @param {string} [name=structure] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
 * @param {string} path - Specifies the shader `struct` path to the uniforms, if required.
 * @param {Array} [uniforms=[]] - Specifies a collection of related uniform variables
 * as is declared in the shader. The names imply the `u_` namespace is used as per the uniform
 * variable naming convention. If a `struct` path is defined, the `u_` namespace is implied
 * on this instead.
 */
class Structure extends Entity
{
   constructor({ name = _name, program, path, uniforms = _uniforms })
   {
      super({ name });

      /**
       * The shader `struct` path to the uniform, if required.
       * @var {string} Entity.Structure.path
       */
      this.path = path;

      /**
       * The collection of related uniform variables as is declared
       * in the shader. The names imply the `u_` namespace is used.
       * @var {Array} Entity.Structure.uniforms
       */
      this.uniforms = uniforms.map(this.instantiate.bind(this, program));
   }

   /**
    * Instantiate the uniforms - see <a href="Entity.Uniform.html">Entity.Uniform</a>.
    * @callback Entity.Structure.instantiate
    * @param {Entity.Program} program - Specifies the program in which the uniforms
    * should be located.
    * @param {string} qualifying - Specifies the uniform variable as is declared
    * in the shader.
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
    * Bind the structure.
    * @function Entity.Structure.bind
    * @returns {undefind}
    */
   bind()
   {
      this.uniforms.map(this.set.bind(this));
   }

   /**
    * Set the value of the given uniform.
    * @callback Entity.Structure.set
    * @param {Entity.Uniform} uniform - Specifies the uniform to assign.
    * @returns {undefind}
    */
   set(uniform)
   {
      uniform.set(this[uniform.uniform]);
   }
}

module.exports = Structure;