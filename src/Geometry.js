'use strict';

import Entity from './Entity';

class Geometry extends Entity
{
   constructor(
   {
      name = 'geometry'
   } = {})
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

export default Geometry;
