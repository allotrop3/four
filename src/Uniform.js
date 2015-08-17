'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const formats = {
   i: '1i',
   ivec2: '2iv',
   ivec3: '3iv',
   ivec4: '4iv',
   f: '1f',
   vec2: '2fv',
   vec3: '3fv',
   vec4: '4fv',
   mat2: 'Matrix2fv',
   mat3: 'Matrix3fv',
   mat4: 'Matrix4fv',
   sampler: '1i'
};

const _name = 'uniform';

class Uniform extends Entity
{
   constructor({ name = _name, program, path, uniform, format } = {})
   {
      super({ name });

      this.path = path;

      this.uniform = uniform;

      this.location = this.from(program, format);

      this.method = `uniform${formats[format]}`;
   }

   from(program, format)
   {
      let uniform = this.uniform;

      if (format !== 'sampler')
      {
         uniform = [this.path, this.uniform].join('.');
      }

      return gl.getUniformLocation(program.buffer, `u_${uniform}`);
   }

   set(value)
   {
      let location = this.location;
      let method = this.method;
      let setter = gl[this.method].bind(gl, this.location);

      if (method.match('Matrix') !== null)
      {
         setter(false, value);
      }
      else
      {
         setter(value);
      }
   }
}

module.exports = Uniform;