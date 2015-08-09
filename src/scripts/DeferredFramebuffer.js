'use strict';

let Framebuffer = require('./Framebuffer');
let gl = require('./gl');

/**
 * DeferredFramebuffer is a wrapper on WebGLFramebuffer buffers
 * to support off-screen rendering
 * @class DeferredFramebuffer
 * @name Entity.Framebuffer.DeferredFramebuffer
 * @extends Entity.Framebuffer
 * @param {string} [name=deferred.framebuffer] - Instance name
 * @param {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} colorAttachment - Framebuffer color attachment
 * @param {Entity.Renderbuffer} depthAttachment - Framebuffer depth attachment
 */
class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = 'deferred.framebuffer', colorAttachment, depthAttachment } = {})
   {
      super({ name });

      /**
       * WebGL framebuffer
       * @var {WebGLFramebuffer} Entity.Framebuffer.DeferredFramebuffer.buffer
       * @default WebGLFramebuffer
       * @private
       */
      this.buffer = gl.createFramebuffer();

      /**
       * Framebuffer color attachment
       * @var {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} Entity.Framebuffer.DeferredFramebuffer.colorAttachment
       * @private
       */
      this.colorAttachment = colorAttachment;

      /**
       * Framebuffer depth attachment
       * @var {Renderbuffer} Entity.Framebuffer.DeferredFramebuffer.depthAttachment
       * @private
       */
      this.depthAttachment = depthAttachment;

      this.configure();
   }

   /**
    * Attach color and depth buffers
    * @function Entity.Framebuffer.DeferredFramebuffer.configure
    * @returns {undefined}
    */
   configure()
   {
      this.bind();

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment.buffer, 0);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment.buffer);

      this.check();
      this.unbind();
   }
}

module.exports = DeferredFramebuffer;