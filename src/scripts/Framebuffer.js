'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

class Framebuffer extends Entity
{
   constructor(colorAttachment, depthAttachment, scene, name = 'framebuffer')
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
