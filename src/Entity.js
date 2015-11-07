'use strict';

let indices = {};

const _name = 'entity';

class Entity
{
   constructor({ name = _name } = {})
   {
      this.name = name;

      this.basename = name;

      this.inheritance = ['Entity'];
   }

   get name()
   {
      return this._name;
   }

   set name(name)
   {
      if (indices[name] === undefined)
      {
         indices[name] = -1;
      }

      indices[name]++;

      this._name = `${name}.0${indices[name]}`;
   }

   get basename()
   {
      return this._basename;
   }

   set basename(basename)
   {
      this._basename = basename;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   is(identity)
   {
      return this.name.match(identity, 'i') !== null;
   }

   isType(entity)
   {
      return this.inheritance.indexOf(entity) !== -1;
   }
}

export default Entity;
