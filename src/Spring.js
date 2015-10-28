'use strict';

let Entity = require('./Entity');

const _name = 'spring';
const _type = 'STRUCTURAL';

class Spring extends Entity
{
   constructor({ name = _name, stiffness, damping, type = _type })
   {
      super({ name });

      this.stiffness = stiffness;

      this.damping = damping;

      this.type = type;

      this.inheritance = ['Entity', 'Spring'];
   }

   get stiffness()
   {
      return this._stiffness;
   }

   set stiffness(stiffness)
   {
      this._stiffness = stiffness;
   }

   get damping()
   {
      return this._damping;
   }

   set damping(damping)
   {
      this._damping = damping;
   }

   get type()
   {
      return this._type;
   }

   set type(type)
   {
      this._type = type;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }
}

module.exports = Spring;