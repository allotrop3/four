'use strict';

let gl = require('./gl');
let Framebuffer = require('./Framebuffer');

let _name = 'deferred.framebuffer';

/**
 * A deferred framebuffer encapsulates user-created framebuffer objects that
 * can be used as the destination for rendering. Framebuffer objects require
 * a color and, optionally, depth attachment to retain the rendered content.
 * @class DeferredFramebuffer
 * @name Entity.Framebuffer.DeferredFramebuffer
 * @extends Entity.Framebuffer
 * @param {string} [name=deferred.framebuffer] - Specifies the entities friendly name.
 * @param {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} colorAttachment - Specifies
 * the framebuffer object color attachment.
 * @param {Entity.Renderbuffer} depthAttachment - Specifies the framebuffer object depth attachment.
 */
class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = _name, colorAttachment, depthAttachment } = {})
   {
      super({ name });

      /**
       * The framebuffer object used as the destination for rendering.
       * @var {WebGLFramebuffer} [Entity.Framebuffer.DeferredFramebuffer.buffer=WebGLFramebuffer]
       */
      this.buffer = gl.createFramebuffer();

      /**
       * The framebuffer object color attachment.
       * @var {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} Entity.Framebuffer.DeferredFramebuffer.colorAttachment
       */
      this.colorAttachment = colorAttachment;

      /**
       * The framebuffer object depth attachment.
       * @var {Renderbuffer} Entity.Framebuffer.DeferredFramebuffer.depthAttachment
       */
      this.depthAttachment = depthAttachment;

      this.configure();
   }

   /**
    * Attach a texture object as a color buffer and a renderbuffer object
    * as a depth buffer of the framebuffer object.
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