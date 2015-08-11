'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'framebuffer';

/**
 * A framebuffer is a collection of buffers that can be used as the destination for rendering. There are
 * two kinds of framebuffers: the default framebuffer, which refers to the canvas element, and user-created
 * framebuffers called framebuffer objects - see
 * <a href="Entity.Framebuffer.DeferredFramebuffer.html">Entity.Framebuffer.DeferredFramebuffer</a>.
 * @class Framebuffer
 * @name Entity.Framebuffer
 * @extends Entity
 * @param {string} [name=framebuffer] - Specifies the entities friendly name.
 */
class Framebuffer extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });

      /**
       * The framebuffer is set to `null` and thus references the default framebuffer.
       * @var {object} [Entity.Framebuffer.buffer=null]
       */
      this.buffer = null;
   }

   /**
    * Bind the framebuffer as the destination for rendering until it is deleted or
    * another framebuffer is bound.
    * @function Entity.Framebuffer.bind
    * @param {boolean} [flush=true] - Flag to flush the contents of the active framebuffer.
    * The initial value is set to `true`.
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
    * Restore the default framebuffer as the destination for rendering.
    * @function Entity.Framebuffer.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }

   /**
    * Flush the contents of the active framebuffer.
    * @function Entity.Framebuffer.flush
    * @returns {undefined}
    */
   flush()
   {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.clear(gl.DEPTH_BUFFER_BIT);
   }

   /**
    * Validates the compile status of the active framebuffer.
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
