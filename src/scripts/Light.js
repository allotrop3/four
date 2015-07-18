'use strict';

let Entity = require('./Entity');

class Light extends Entity
{
   constructor(name = 'light')
   {
      super(name);
   }
}

module.exports = Light;