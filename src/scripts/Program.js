'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Program extends Entity
{
   constructor(vertexShader, fragmentShader, attributes = [], uniforms = [], name = 'program')
   {
      super(name);

      this.buffer = gl.createProgram();
      this.vertexShader = vertexShader;
      this.fragmentShader = fragmentShader;
      this.attributes = attributes;
      this.uniforms = uniforms;

      this.link();
   }

   link()
   {
      let buffer = this.buffer;

      gl.attachShader(buffer, this.vertexShader);
      gl.attachShader(buffer, this.fragmentShader);

      gl.linkProgram(buffer);

      if (gl.getProgramParameter(buffer, gl.LINK_STATUS))
      {
         let error = gl.getProgramInfoLog(buffer);

         gl.deleteProgram(buffer);

         throw new Error(error);
      }
   }

   bind()
   {
      gl.useProgram(this.buffer);
   }
}

module.exports = Program;