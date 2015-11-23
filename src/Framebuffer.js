'use strict';

import { gl } from './Context';
import Entity from './Entity';

class Framebuffer extends Entity
{
   constructor(
   {
      name = 'framebuffer',
      flushable = true
   } = {})
   {
      super({ name });

      this.buffer = null;

      this.flushable = flushable;

      this.inheritance = ['Entity', 'Framebuffer'];
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
   }

   get flushable()
   {
      return this._flushable;
   }

   set flushable(flushable)
   {
      this._flushable = flushable;
   }

   bind(flush = true)
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);

      if (this.flushable && flush)
      {
         this.flush();
      }
   }

   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }

   flush()
   {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
   }

   check()
   {
      let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      let error = false;

      switch (status)
      {
         case gl.FRAMEBUFFER_UNSUPPORTED:
            error = 'FRAMEBUFFER_UNSUPPORTED';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            error = 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            error = 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            error = 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
            break;
      }

      if (error)
      {
         gl.deleteFramebuffer(this.buffer);

         throw new Error(error);
      }

      return true;
   }
}

export default Framebuffer;
