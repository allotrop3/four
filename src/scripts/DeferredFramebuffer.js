'use strict';

let Framebuffer = require('./Framebuffer');
let gl = require('./gl');

/**
 * DeferredFramebuffer is a wrapper on WebGLFramebuffer containers
 * to support off-screen rendering
 * @class DeferredFramebuffer
 * @name Entity.Framebuffer.DeferredFramebuffer
 * @extends Entity.Framebuffer
 * @param {string} [name=deferred.framebuffer] - Instance name
 * @param {Entity.Texture.ImageTexture|Entity.Texture.DataTexture} colorAttachment - Framebuffer color attachment
 * @param {Entity.Renderbuffer} depthAttachment - Framebuffer depth attachment
 * @param {Entity.Scene.OrthographicScene|Entity.Scene.PerspectiveScene} scene - View configuration
 * @property {WebGLFramebuffer} [buffer=WebGLFramebuffer] - Render target
 */
class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = 'deferred.framebuffer', colorAttachment, depthAttachment, scene } = {})
   {
      super({ name, scene });

      /**
       * Render target
       * @var {WebGLFramebuffer} Entity.Framebuffer.DeferredFramebuffer.buffer
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

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.colorAttachment, 0);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthAttachment);

      this.check();
      this.unbind();
   }
}

module.exports = DeferredFramebuffer;