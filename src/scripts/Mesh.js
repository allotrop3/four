'use strict';

let Entity = require('./Entity');

/**
 * Mesh
 * @class Mesh
 * @name Mesh
 * @extends Entity
 * @param {string} [name=mesh] - Instance name
 */
class Mesh extends Entity
{
   constructor({ name = 'mesh' } = {})
   {
      super({ name });
   }
}

module.exports = Mesh;