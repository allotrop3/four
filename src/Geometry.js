'use strict';

let Entity = require('./Entity');

const _name = 'geometry';

class Geometry extends Entity
{
   constructor({ name = _name } = {})
   {
      super({ name });

      this.vertices = [];
      this.colors = [];
      this.normals = [];
      this.indices = [];
      this.faces = [];
      this.materials = [];
   }
}

module.exports = Geometry;