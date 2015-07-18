'use strict';

let Framebuffer = require('./Framebuffer');
let gl = require('./gl');

class DeferredFramebuffer extends Framebuffer
{
   constructor(colorAttachment, depthAttachment, scene, level, name = 'deferred.framebuffer')
   {
      super(scene, level, name);

      this.buffer = gl.createFramebuffer();
      this.colorAttachment = colorAttachment;
      this.depthAttachment = depthAttachment;

      this.configure();
   }

   configure()
   {
      this.bind();

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment, this.level);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment);

      this.check();
      this.unbind();
   }
}

module.exports = DeferredFramebuffer;