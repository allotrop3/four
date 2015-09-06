'use strict';

let Entity = require('./Entity');

const _name = 'renderer';

class Renderer extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

module.exports = Renderer;