'use strict';

let gl = require('./gl');
let Framebuffer = require('./Framebuffer');

const _name = 'depth.framebuffer';

class DepthFramebuffer extends Framebuffer
{
   constructor({ name = _name, colorAttachment, depthAttachment, flushable } = {})
   {
      super({ name, flushable });

      this.buffer = gl.createFramebuffer();

      this.colorAttachment = colorAttachment;

      this.depthAttachment = depthAttachment;
            
      this.inheritance = ['Entity', 'Framebuffer', 'DepthFramebuffer'];

      this.configure();
   }

   configure()
   {
      this.bind(false);

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthAttachment.buffer, 0);

      this.check();
      this.unbind();
   }
}

module.exports = DepthFramebuffer;
