'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

/**
 * Fluid is a grid-based fluid simulator. Coming soon...
 * @class Fluid
 * @name Entity.Fluid
 * @extends Entity
 * @param {string} [name=fluid] - Specifies the entities friendly name.
 */
class Fluid extends Entity
{
   constructor({ name = 'fluid' } = {})
   {
      super({ name });
   }
}

module.exports = Fluid;