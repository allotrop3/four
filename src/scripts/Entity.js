'use strict';

let indices = {};

class Entity
{
   constructor(name = 'entity')
   {
      this.name = this.index(name);
      this.destroyed = false;
   }

   get type()
   {
      return this.constructor.name;
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

   destroy()
   {
      this.destroyed = true;
   }
}

module.exports = Entity;
