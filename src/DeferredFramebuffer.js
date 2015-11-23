'use strict';

import { gl } from './Context';
import Framebuffer from './Framebuffer';

class DeferredFramebuffer extends Framebuffer
{
   constructor(
   {
      colorAttachment,
      depthAttachment,
      flushable,
      name = 'deferred.framebuffer'
   } = {})
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

   configure()
   {
      this.bind(false);

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment.buffer);

      this.check();
      this.unbind();
   }
}

export default DeferredFramebuffer;