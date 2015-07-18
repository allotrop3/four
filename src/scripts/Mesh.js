'use strict';

let Entity = require('./Entity');

class Mesh extends Entity
{
   constructor(name = 'mesh')
   {
      super(name);
   }

   render()
   {

   }
}

module.exports = Mesh;