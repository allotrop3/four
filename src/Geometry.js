'use strict';

import Entity from './Entity';

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

export default Geometry;