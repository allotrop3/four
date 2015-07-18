'use strict';

let Entity = require('./Entity');

class Texture extends Entity
{
   constructor(name = 'texture')
   {
      super(name);
   }
}

module.exports = Texture;