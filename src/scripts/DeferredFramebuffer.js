'use strict';

let Framebuffer = require('./Framebuffer');
let gl = require('./gl');

/**
 * DeferredFramebuffer is a wrapper on WebGLFramebuffer containers
 * to support off-screen rendering
 * @class DeferredFramebuffer
 * @name DeferredFramebuffer
 * @extends Framebuffer
 * @param {string} [name=deferred.framebuffer] - Instance name
 * @param {ImageTexture|DataTexture} colorAttachment - Framebuffer color attachment
 * @param {Renderbuffer} depthAttachment - Framebuffer depth attachment
 * @param {OrthographicScene|PerspectiveScene} scene - View configuration
 */
class DeferredFramebuffer extends Framebuffer
{
   constructor({ name = 'deferred.framebuffer', colorAttachment, depthAttachment, scene } = {})
   {
      super({ name, scene });

      /**
       * WebGL framebuffer container
       * @var {WebGLFramebuffer} DeferredFramebuffer.buffer
       * @private
       */
      this.buffer = gl.createFramebuffer();

      /**
       * Framebuffer color attachment
       * @var {ImageTexture|DataTexture} DeferredFramebuffer.colorAttachment
       * @private
       */
      this.colorAttachment = colorAttachment;

      /**
       * Framebuffer depth attachment
       * @var {Renderbuffer} DeferredFramebuffer.depthAttachment
       * @private
       */
      this.depthAttachment = depthAttachment;

      this.configure();
   }

   /**
    * Attach color and depth buffers
    * @function DeferredFramebuffer.confgure
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