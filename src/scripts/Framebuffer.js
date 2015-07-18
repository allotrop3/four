'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Framebuffer extends Entity
{
   constructor(scene, level = 0, name = 'framebuffer')
   {
      super(name);

      this.buffer = null;
      this.scene = scene;
      this.level = level;
   }

   enable()
   {
      this.scene.bind();
      this.bind();
   }

   bind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);
   }

   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }

   flush()
   {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.clear(gl.DEPTH_BUFFER_BIT);
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
