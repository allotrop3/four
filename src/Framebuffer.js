'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

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

module.exports = Framebuffer;
