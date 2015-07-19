'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Framebuffer is a wrapper on the WebGLFramebuffer container
 * @class Framebuffer
 * @name Framebuffer
 * @extends Entity
 * @param {string} [name=framebuffer] - The name of the framebuffer instance
 * @param {Scene} scene - View configuration
 */
class Framebuffer extends Entity
{
   constructor(name = 'framebuffer', scene)
   {
      super(name);

      let args = arguments[0];

      /**
       * WebGL framebuffer container
       * @var {object} Framebuffer.buffer
       * @default null
       * @private
       */
      this.buffer = null;

      /**
       * Framebuffer scene
       * @var {Scene} Framebuffer.scene
       * @default undefined
       * @private
       */
      this.scene = args.scene;
   }

   /**
    * Enable the framebuffer and associated
    * scene as the current render target
    * @function {undefined} Framebuffer.enable
    */
   enable()
   {
      this.scene.bind();
      this.bind();
   }

   /**
    * Bind the framebuffer as the current
    * render target
    * @function Framebuffer.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);
   }

   /**
    * Unbind the framebuffer
    * @function Framebuffer.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }

   /**
    * Flush the contents of the framebuffers'
    * color and depth attachments
    * @function Framebuffer.flush
    * @returns {undefined}
    */
   flush()
   {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.clear(gl.DEPTH_BUFFER_BIT);
   }

   /**
    * Check the framebuffer compile status
    * @function Framebuffer.check
    * @returns {undefined|Error}
    */
   check()
   {
      let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      let exception = false;

      switch (status)
      {
         case gl.FRAMEBUFFER_UNSUPPORTED:
            exception = 'unsupported';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            exception = 'attachments incomplete';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            exception = 'dimensions incomplete';
            break;

         case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            exception = 'attachment missing';
            break;
      }

      if (exception)
      {
         gl.deleteFramebuffer(this.buffer);

         throw new Error(error);
      }
   }
}

module.exports = Framebuffer;
