'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let formats = {
   i: '1i',
   vec2i: '2iv',
   vec3i: '3iv',
   vec4i: '4iv',
   f: '1f',
   vec2f: '2fv',
   vec3f: '3fv',
   vec4f: '4fv',
   mat2: 'Matrix2fv',
   mat3: 'Matrix3fv',
   mat4: 'Matrix4fv'
};

/**
 * Uniform is a wrapper on shader WebGLUniformLocation uniforms
 * @class Uniform
 * @name Entity.Uniform
 * @extends Entity
 * @param {string} [name=program] - Instance name
 * @param {Entity.Program} [program] - Program in which the shader uniform is used
 * @param {string} uniform - Shader variable name
 * @param {number} format - Component data format
 */
class Uniform extends Entity
{
   constructor({ name = 'uniform', program, uniform, format } = {})
   {
      super({ name });

      /**
       * Shader variable name
       * @var {object} [Entity.Uniform.uniform=u_${uniform}]
       * @private
       */
      this.uniform = `u_${uniform}`;

      /**
       * Shader uniform location
       * @var {WebGLUniformLocation} [Entity.Uniform.location=WebGLUniformLocation]
       * @private
       */
      this.location = gl.getUniformLocation(program.buffer, this.uniform);

      /**
       * Uniform setter method
       * @var {string} [Entity.Uniform.location=gl.getAttributeLocation]
       * @default uniform${format}
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
      gl[this.method](this.location, value);
   }
}

module.exports = Uniform;