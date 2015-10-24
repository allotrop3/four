'use strict';

let gl = require('./gl');
let Framebuffer = require('./Framebuffer');

const _name = 'deferred.framebuffer';

class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = _name, colorAttachment, depthAttachment, flushable } = {})
   {
      super({ name, flushable });

      this.buffer = gl.createFramebuffer();

      this.colorAttachment = colorAttachment;

      this.depthAttachment = depthAttachment;

      this.inheritance = ['Entity', 'Framebuffer', 'DeferredFramebuffer'];

      this.configure();
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
   }

   get colorAttachment()
   {
      return this._colorAttachment;
   }

   set colorAttachment(colorAttachment)
   {
      this._colorAttachment = colorAttachment;
   }

   get depthAttachment()
   {
      return this._depthAttachment;
   }

   set depthAttachment(depthAttachment)
   {
      this._depthAttachment = depthAttachment;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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