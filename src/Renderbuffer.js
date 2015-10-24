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

      this.inheritance = ['Entity', 'Renderbuffer'];

      this.configure();
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
   }

   get width()
   {
      return this._width;
   }

   set width(width)
   {
      this._width = width;
   }

   get height()
   {
      return this._height;
   }

   set height(height)
   {
      this._height = height;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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
