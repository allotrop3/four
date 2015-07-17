'use strict';

var Entity = require('./Entity');

class Texture extends Entity
{
   constructor(name = 'texture')
   {
      super(name);
   }
}

module.exports = Texture;