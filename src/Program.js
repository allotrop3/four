'use strict';

let gl = require('./gl');
let Entity = require('./Entity');
let VertexShader = require('./VertexShader');
let FragmentShader = require('./FragmentShader');

const _name = 'program';

class Program extends Entity
{
   constructor({ name = _name, selector } = {})
   {
      super({ name });

      this.buffer = gl.createProgram();

      this.vertexShader = new VertexShader({ selector: selector });

      this.fragmentShader = new FragmentShader({ selector: selector });

      this.link();
   }

   link()
   {
      let buffer = this.buffer;

      gl.attachShader(buffer, this.vertexShader.buffer);
      gl.attachShader(buffer, this.fragmentShader.buffer);

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
      let context = gl.isContextLost();

      if (!status && !context)
      {
         let error = gl.getProgramInfoLog(buffer);

         gl.deleteProgram(buffer);

         throw new Error(error);
      }
   }
}

module.exports = Program;