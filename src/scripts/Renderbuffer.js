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
      let width = this.width;
      let height = this.height;

      this.bind();

      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);

      this.unbind();
   }

   bind()
   {
      let buffer = this.buffer;

      gl.bindRenderbuffer(gl.RENDERBUFFER, buffer);
   }

   unbind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
   }
}

module.exports = Renderbuffer;
