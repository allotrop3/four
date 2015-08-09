'use strict';

let indices = {};

const _name = 'entity';

/**
 * Entity is the base class.
 * @class Entity
 * @param {string} [name=entity] - Specifies the entities friendly name.
 */
class Entity
{
   constructor({ name = _name } = {})
   {
      /**
       * Entities friendly name.
       * @var {string} Entity.name
       */
      this.name = this.index(name);

      /**
       * Entities friendly name without the auto-generated index.
       * @var {string} Entity.basename
       */
      this.basename = name;
   }

   /**
    * Auto-generate the entities index based on the number of instantiations
    * of its basename.
    * @function Entity.index
    * @param {string} name - Entities friendly name.
    * @returns {string}
    */
   index(name)
   {
      if (indices[name] === undefined)
      {
         indices[name] = -1;
      }

      indices[name]++;

      return `${name}.0${indices[name]}`;
   }

   /**
    * Validate the identity of an entity against the given identity.
    * @function Entity.is
    * @param {string} identity - Entity name to check against.
    * @returns {boolean}
    */
   is(identity)
   {
      return this.name.match(identity, 'i') !== null;
   }
}

module.exports = Entity;
