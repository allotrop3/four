'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Program extends Entity
{
   constructor(name, vertexShader, fragmentShader, attributes = {}, uniforms = {})
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
      let vertexShader = this.vertexShader;
      let fragmentShader = this.fragmentShader;

      gl.attachShader(buffer, vertexShader);
      gl.attachShader(buffer, fragmentShader);

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