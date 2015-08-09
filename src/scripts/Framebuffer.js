'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Framebuffer is a wrapper on WebGLFramebuffer buffers
 * @class Framebuffer
 * @name Entity.Framebuffer
 * @extends Entity
 * @param {string} [name=framebuffer] - Instance name
 */
class Framebuffer extends Entity
{
   constructor({ name = 'framebuffer' } = {})
   {
      super({ name });

      /**
       * WebGL framebuffer
       * @var {object} Entity.Framebuffer.buffer
       * @default null
       * @private
       */
      this.buffer = null;
   }

   /**
    * Bind the framebuffer as the current
    * render target
    * @function Entity.Framebuffer.bind
    * @param {boolean} [flush=true] - Clear framebuffer contents
    * @returns {undefined}
    */
   bind(flush = true)
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);

      if (flush)
      {
         this.flush();
      }
   }

   /**
    * Unbind the framebuffer
    * @function Entity.Framebuffer.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }

   /**
    * Flush the contents of the framebuffers'
    * color and depth attachments
    * @function Entity.Framebuffer.flush
    * @returns {undefined}
    */
   flush()
   {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.clear(gl.DEPTH_BUFFER_BIT);
   }

   /**
    * Check the framebuffer compile status
    * @function Entity.Framebuffer.check
    * @returns {undefined|Error}
    */
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
