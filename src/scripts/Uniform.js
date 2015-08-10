'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

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
   mat4: 'Matrix4fv'
};

const _name = 'uniform';

/**
 * Uniform is a wrapper on shader WebGLUniformLocation uniforms.
 * Supported types include i, vec2i, vec3i, vec4i, f, vec2f, vec3f
 * vec4f, mat2, mat3, and mat4
 * @class Uniform
 * @name Entity.Uniform
 * @extends Entity
 * @param {string} [name=program] - Instance name
 * @param {string} [path] - Struct path to uniform
 * @param {Entity.Program} program - Program in which the shader uniform is used
 * @param {string} uniform - Shader variable name
 * @param {number} format - Component data format
 */
class Uniform extends Entity
{
   constructor({ name = _name, program, path, uniform, format } = {})
   {
      super({ name });

      /**
       * Shader variable name
       * @var {string} [uniform] - Shader uniform
       * @private
       */
      this.path = path;

      /**
       * Shader variable name
       * @var {string} Entity.Uniform.uniform - Shader uniform
       * @private
       */
      this.uniform = uniform;

      /**
       * Shader uniform location
       * @var {WebGLUniformLocation} [Entity.Uniform.location=WebGLUniformLocation]
       * @private
       */
      this.location = this.from(program);

      /**
       * Uniform setter method
       * @var {string} [Entity.Uniform.location=uniform${format}]
       * @private
       */
      this.method = `uniform${formats[format]}`;
   }

   /**
    * Set shader uniform value
    * @function Entity.Uniform.set
    * @param {*} value - Shader uniform value
    * @returns {undefined}
    */
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

   /**
    * Locate the shader uniform from within the given program
    * @function Entity.Uniform.from
    * @param {Entity.Program} program - Program in which the shader uniform is used
    * @returns {object|WebGLUniformLocation}
    */
    from(program)
    {
       let uniform = [this.path, this.uniform].join('.');

       return gl.getUniformLocation(program.buffer, `u_${uniform}`);
    }
}

module.exports = Uniform;