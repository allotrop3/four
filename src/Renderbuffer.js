'use strict';

import { gl } from './Context';
import Entity from './Entity';

class Renderbuffer extends Entity
{
   constructor(
   {
      width,
      height,
      name = 'renderbuffer'
   } = {})
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

export default Renderbuffer;
