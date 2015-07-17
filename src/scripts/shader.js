'use strict';

var Entity = require('./entity');
var gl = require('./gl');

class Shader extends Entity
{
   constructor(name, path, type)
   {
      super(name);

      this.buffer = gl.createShader(type);
      this.path = path;
   }

   fetch()
   {

   }

   compile(source)
   {
      var buffer = this.buffer;

      gl.shaderSource(buffer, source);
      gl.compileShader(buffer);

      if (gl.getShaderParameter(buffer, gl.COMPILE_STATUS))
      {
         var error = gl.getShaderInfoLog(buffer);

         gl.deleteShader(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Shader;