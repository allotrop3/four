'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let ajax = require('./utils/ajax');

class Shader extends Entity
{
   constructor(name, path, type)
   {
      super(name);

      this.buffer = gl.createShader(type);

      this.fetch(path);
   }

   fetch(path)
   {
      ajax(path).then(this.compile);
   }

   compile(source)
   {
      let buffer = this.buffer;

      gl.shaderSource(buffer, source);
      gl.compileShader(buffer);

      if (gl.getShaderParameter(buffer, gl.COMPILE_STATUS))
      {
         let error = gl.getShaderInfoLog(buffer);

         gl.deleteShader(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Shader;
