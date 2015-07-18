'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Renderbuffer extends Entity
{
   constructor(width, height, name = 'renderbuffer')
   {
      super(name);

      this.buffer = gl.createRenderbuffer();
      this.width = width;
      this.height = height;

      this.configure();
   }

   configure()
   {
      this.bind();

      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);

      this.unbind();
   }

   bind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
   }

   unbind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
   }
}

module.exports = Renderbuffer;
