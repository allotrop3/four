'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Program extends Entity
{
   constructor(name = 'program', vertexShader, fragmentShader)
   {
      super(name);

      this.buffer = gl.createProgram();
      this.vertexShader = vertexShader;
      this.fragmentShader = fragmentShader;

      this.link();
   }

   link()
   {
      let buffer = this.buffer;

      gl.attachShader(buffer, this.vertexShader);
      gl.attachShader(buffer, this.fragmentShader);

      gl.linkProgram(buffer);

      this.check();
   }

   bind()
   {
      gl.useProgram(this.buffer);
   }

   check()
   {
      let buffer = this.buffer;
      let status = gl.getProgramParameter(buffer, gl.LINK_STATUS);

      if (!status)
      {
         let error = gl.getProgramInfoLog(buffer);

         gl.deleteProgram(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Program;