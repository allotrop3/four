'use strict';

import gl from './gl';
import Entity from './Entity';

const _name = 'framebuffer';
const _flushable = true;

class Framebuffer extends Entity
{
   constructor({ name = _name, flushable = _flushable } = {})
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

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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
            error = 'unsupported';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            error = 'attachments incomplete';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            error = 'dimensions incomplete';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            error = 'attachment missing';
            break;
      }

      if (error)
      {
         gl.deleteFramebuffer(this.buffer);

         throw new Error(error);
      }
   }
}

export default Framebuffer;
