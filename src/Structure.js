'use strict';

let Entity = require('./Entity');
let Uniform = require('./Uniform');

const _name = 'structure';
const _uniforms = [];

class Structure extends Entity
{
   constructor({ name = _name, program, path, uniforms = _uniforms })
   {
      super({ name });

      this.path = path;

      this.uniforms = uniforms.map(this.instantiate.bind(this, program));
   }

   instantiate(program, qualifying)
   {
      let vars = qualifying.split(' ');
      let format = vars[0];
      let uniform = vars[1];

      return new Uniform({ program: program, path: this.path, uniform: uniform, format: format });
   }

   bind()
   {
      this.uniforms.map(this.set.bind(this));
   }

   unbind() {}

   set(uniform)
   {
      uniform.set(this[uniform.uniform]);
   }
}

module.exports = Structure;