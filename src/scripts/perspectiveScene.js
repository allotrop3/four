'use strict';

var Scene = require('./scene');

class perspectiveScene extends Scene
{
   constructor(name, backgroundColor)
   {
      super(name, backgroundColor);
   }

   configure()
   {
      super.configure();
   }

   bind()
   {
      super.bind();
   }
}

module.exports = perspectiveScene;