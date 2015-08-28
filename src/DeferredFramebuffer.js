'use strict';

let gl = require('./gl');
let Framebuffer = require('./Framebuffer');

const _name = 'deferred.framebuffer';

class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = _name, colorAttachment, depthAttachment } = {})
   {
      super({ name });

      this.buffer = gl.createFramebuffer();

      this.colorAttachment = colorAttachment;

      this.depthAttachment = depthAttachment;

      this.configure();
   }

   configure()
   {
      this.bind(false);

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment.buffer);

      this.check();
      this.unbind();
   }
}

module.exports = DeferredFramebuffer;