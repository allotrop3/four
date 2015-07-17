'use strict';

var Entity = require('./Entity');
var gl = require('./gl');

class Framebuffer extends Entity
{
   constructor(name, colorAttachment, depthAttachment, scene)
   {
      super(name);

      this.buffer = gl.createFramebuffer();
      this.colorAttachment = colorAttachment;
      this.depthAttachment = depthAttachment;
      this.scene = scene;
   }

   configure()
   {

   }

   lock()
   {

   }

   bind()
   {
      let buffer = this.buffer;

      gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
   }

   unbind()
   {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
   }
}

module.exports = Framebuffer;
