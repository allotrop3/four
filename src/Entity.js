'use strict';

let indices = {};

const _name = 'entity';

class Entity
{
   constructor({ name = _name } = {})
   {
      this.name = this.index(name);

      this.basename = name;
   }

   index(name)
   {
      if (indices[name] === undefined)
      {
         indices[name] = -1;
      }

      indices[name]++;

      return `${name}.0${indices[name]}`;
   }

   is(identity)
   {
      return this.name.match(identity, 'i') !== null;
   }
}

module.exports = Entity;
