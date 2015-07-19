'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let ajax = require('./utils/ajax');

/**
 * Shader is a wrapper on WebGLShader containers
 * @class Shader
 * @name Entity.Shader
 * @extends Entity
 * @param {string} [name=shader] - Instance name
 * @param {string} path - Filepath to shader source
 * @param {number} type - Shader type
 */
class Shader extends Entity
{
   constructor({ name = 'shader', path } = {}, type)
   {
      super({ name });

      /**
       * WebGL shader buffer
       * @var {WebGLShader} Entity.Shader.buffer
       * @default WebGLShader
       * @private
       */
      this.buffer = gl.createShader(type);

      this.fetch(path);
   }

   /**
    * Fetch and compile the shader source
    * @function Entity.Shader.fetch
    * @param {string} path - Filepath to shader source
    * @returns {undefined}
    */
   fetch(path)
   {
      ajax(path).then(this.compile);
   }

   /**
    * Compile the shader source
    * @function Entity.Shader.compile
    * @param {string} source - Shader source
    * @returns {undefined}
    */
   compile(source)
   {
      let buffer = this.buffer;

      gl.shaderSource(buffer, source);
      gl.compileShader(buffer);

      this.check();
   }

   /**
    * Validate shader compile status
    * @function Entity.Shader.check
    * @returns {undefined}
    */
   check()
   {
      let buffer = this.buffer;
      let status = gl.getShaderParameter(buffer, gl.COMPILE_STATUS);

      if (!status)
      {
         let error = gl.getShaderInfoLog(buffer);

         gl.deleteShader(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Shader;
