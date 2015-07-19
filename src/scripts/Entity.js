'use strict';

let indices = {};

/**
 * Entity is the base class
 * @class Entity
 * @param {string} [name=entity] - Instance name
 * @property {boolean} [destroyed=false] - Entity delete flag
 */
class Entity
{
   constructor({ name = 'entity' } = {})
   {
      /**
       * Entity name
       * @var {string} Entity.name
       * @default '${name}.0${indices[name]}'
       * @private
       */
      this.name = this.index(name);

      /**
       * Entity delete flag
       * @var {boolean} Entity.destroyed
       * @default false
       * @private
       */
      this.destroyed = false;
   }

   /**
    * Autogenerate a name with an index based on
    * its number of instantiations
    * @function Entity.index
    * @param {string} [name=entity] - Entity name
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
    * Flag entity for deletion
    * @function Entity.destroy
    * @returns {undefined}
    */
   destroy()
   {
      this.destroyed = true;
   }
}

module.exports = Entity;
