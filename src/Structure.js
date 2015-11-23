'use strict';

import Entity from './Entity';
import Uniform from './Uniform';

class Structure extends Entity
{
   constructor(
   {
      path,
      name = 'structure',
      uniforms = []
   } = {})
   {
      super({ name });

      this.path = path;

      this.uniforms = uniforms;

      this.inheritance = ['Entity', 'Structure'];
   }

   get path()
   {
      return this._path;
   }

   set path(path)
   {
      this._path = path;
   }

   get uniforms()
   {
      return this._uniforms;
   }

   set uniforms(uniforms)
   {
      this._uniforms = uniforms.map(this.instantiate.bind(this));
   }

   instantiate(qualifying)
   {
      let properties = qualifying.split(' ');
      let format = properties[0];
      let uniform = properties[1];

      return new Uniform({ path: this.path, uniform: uniform, format: format });
   }

   bind(program)
   {
      this.uniforms.map(this.set.bind(this, program));
   }

   unbind() {}

   set(program, uniform)
   {
      uniform.set(program, this[uniform.uniform]);
   }
}

export default Structure;