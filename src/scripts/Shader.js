'use strict';

let gl = require('./gl');
let ajax = require('./utils/ajax');
let Entity = require('./Entity');

const _name = 'shader';

/**
 * A shader is used to maintain the source code strings that define a shader. Two types of
 * shader are supported. A shader of type <code>gl.VERTEX_SHADER</code> is a shader that is
 * intended to run on the programmable vertex processor. A shader of type
 * <code>gl.FRAGMENT_SHADER</code> is a shader that is intended to run on the programmable
 * fragment processor.
 * @class Shader
 * @name Entity.Shader
 * @extends Entity
 * @param {string} [name=shader] - Specifies the entities friendly name.
 * @param {string} path - Specifies the relative path to the shader file.
 * @param {number} type - Specifies the type of shader.
 */
class Shader extends Entity
{
   constructor({ name = _name, path } = {}, type)
   {
      super({ name });

      /**
       * The shader.
       * @var {WebGLShader} [Entity.Shader.buffer=WebGLShader]
       */
      this.buffer = gl.createShader(type);

      this.fetch(path);
   }

   /**
    * Asynchronously fetches the shader file contents.
    * @function Entity.Shader.fetch
    * @param {string} path - Specifies the relative path to the shader file.
    * @returns {undefined}
    */
   fetch(path)
   {
      ajax(path).then(this.compile.bind(this));
   }

   /**
    * Compiles the source code strings.
    * @callback Entity.Shader.compile
    * @param {string} source - Specifies the shader source code strings.
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
    * Validates the compile status of the shader.
    * @function Entity.Shader.check
    * @returns {undefined|Error}
    */
   check()
   {
      let buffer = this.buffer;
      let status = gl.getShaderParameter(buffer, gl.COMPILE_STATUS);
      let context = gl.isContextLost();

      if (!status && !context)
      {
         let error = gl.getShaderInfoLog(buffer);

         gl.deleteShader(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Shader;
