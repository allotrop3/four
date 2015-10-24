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
   constructor({ name = _name, path, uniform, format } = {})
   {
      super({ name });

      this.path = path;

      this.uniform = uniform;

      this.location = undefined;

      this.format = format;

      this.method = format;

      this.inheritance = ['Entity', 'Uniform'];
   }

   get path()
   {
      return this._path;
   }

   set path(path)
   {
      this._path = path;
   }

   get uniform()
   {
      return this._uniform;
   }

   set uniform(uniform)
   {
      this._uniform = uniform;
   }

   get location()
   {
      return this._location;
   }

   set location(location)
   {
      this._location = location;
   }

   get format()
   {
      return this._format;
   }

   get method()
   {
      return this._method;
   }

   set method(format)
   {
      this._method = `uniform${formats[format]}`;
   }

   set format(format)
   {
      this._format = format;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   locate(program)
   {
      let path = this.path;
      let uniform = this.uniform;

      if (this.format !== 'sampler' && path !== undefined)
      {
         uniform = [path, uniform].join('.');
      }

      return this.location = gl.getUniformLocation(program.buffer, `u_${uniform}`);
   }

   set(program, value)
   {
      let location = this.locate(program);
      let method = this.method;

      if (method.match('Matrix') !== null)
      {
         gl[method](location, false, value);
      }
      else
      {
         gl[method](location, value);
      }
   }
}

module.exports = Uniform;