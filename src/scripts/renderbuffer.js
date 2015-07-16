'use strict';

var Entity = require('./entity');

class Renderbuffer extends Entity
{
   constructor(name, width, height)
   {
      super(name);

      this.buffer = undefined;
      this.width = width;
      this.height = height;
   }

   bind()
   {

   }

   unbind()
   {

   }
}

module.exports = Renderbuffer;