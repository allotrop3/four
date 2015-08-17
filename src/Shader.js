'use strict';

let gl = require('./gl');
let ajax = require('./utils/ajax');
let Entity = require('./Entity');

const _name = 'shader';

class Shader extends Entity
{
   constructor({ name = _name, selector } = {}, type)
   {
      super({ name });

      this.buffer = gl.createShader(type);

      this.compile(selector);
   }

   compile(selector)
   {
      let buffer = this.buffer;
      let source = document.querySelector(selector).textContent;

      gl.shaderSource(buffer, source);
      gl.compileShader(buffer);

      this.check();
   }

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
