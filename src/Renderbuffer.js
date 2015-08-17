'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'renderbuffer';

class Renderbuffer extends Entity
{
   constructor({ name = _name, width, height } = {})
   {
      super({ name });

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
