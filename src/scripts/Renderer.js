'use strict';

let Entity = require('./Entity');

/**
 * Renderer
 * @class Renderer
 * @name Entity.Renderer
 * @extends Entity
 * @param {string} [name=renderer] - Instance name
 */
class Renderer extends Entity
{
   constructor(name = 'renderer')
   {
      super(name);
   }
}

module.exports = Renderer;