'use strict';

let gl = require('./gl');
let ajax = require('./utils/ajax');
let Entity = require('./Entity');
let shaders = require('./shaders/shaders');

const _name = 'shader';

class Shader extends Entity
{
   constructor({ name = _name, selector } = {}, type)
   {
      super({ name });

      this.buffer = gl.createShader(gl[type]);
      
      this.inheritance = ['Entity', 'Shader'];
      
      this.compile(type, selector);
   }
   
   generate(type, selector)
   {
      let source = document.querySelector(selector).textContent;
      
      for (var tag in shaders)
      {
         source = source.replace(`@${tag};`, shaders[tag][type]);  
      }
      
      return source;
   }

   compile(type, selector)
   {
      let buffer = this.buffer;
      let source = this.generate(type, selector);

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
