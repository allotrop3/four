'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Fluid is a grid-based fluid simulator
 * @class Fluid
 * @name Entity.Fluid
 * @extends Entity
 * @param {string} [name=fluid] - Instance name
 */
class Fluid extends Entity
{
   constructor({ name = 'fluid' } = {})
   {
      super({ name });
   }
}

module.exports = Fluid;