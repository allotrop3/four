'use strict';

class Entity
{
   constructor(name = 'entity')
   {
      this.name = name;
      this.destroyed = false;
   }

   destroy()
   {
      this.destroyed = true;
   }
}

module.exports = Entity;