'use strict';

let Entity = require('./Entity');

const _name = 'renderer';

/**
 * Renderer. Coming soon...
 * @class Renderer
 * @name Entity.Renderer
 * @extends Entity
 * @param {string} [name=renderer] - Specifies the entities friendly name.
 */
class Renderer extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });
   }
}

module.exports = Renderer;