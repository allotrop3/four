'use strict';

let Entity = require('./Entity');

const _name = 'renderer';

/**
 * Renderer
 * @class Renderer
 * @name Entity.Renderer
 * @extends Entity
 * @param {string} [name=renderer] - Instance name
 */
class Renderer extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

module.exports = Renderer;