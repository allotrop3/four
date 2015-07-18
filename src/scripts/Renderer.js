'use strict';

let Entity = require('./Entity');

class Renderer extends Entity
{
   constructor(name = 'renderer')
   {
      super(name);
   }
}

module.exports = Renderer;