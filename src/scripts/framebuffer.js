'use strict';

var Entity = require('./entity');

class Framebuffer extends Entity
{
   constructor(name, colorAttachment, depthAttachment, scene)
   {
      super(name);

      this.buffer = undefined;
      this.colorAttachment = colorAttachment;
      this.depthAttachment = depthAttachment;
      this.scene = scene;
   }

   lock()
   {
      
   }

   bind()
   {

   }

   unbind()
   {

   }   
}

module.exports = Framebuffer;