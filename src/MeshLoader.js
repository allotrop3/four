'use strict';

let ajax = require('./utils/ajax');
let Entity = require('./Entity');

const _name = 'mesh.loader';

class MeshLoader extends Entity
{
   constructor({ name = _name, path } = {})
   {
      super({ name });

      this.request = undefined;

      this.vertices = [];

      this.uvs = [];

      this.normals = [];

      this.tmp = {
         vertices: [],
         colors: [],
         uvs: [],
         normals: []
      };

      this.indices = [];
      
      this.inheritance = ['Entity', 'MeshLoader'];

      this.fetch(path);
   }

   fetch(path)
   {
      this.request = ajax(path).then(this.parse.bind(this)).then(this.flush.bind(this));
   }

   flush()
   {
      delete this.tmp;
   }
}

module.exports = MeshLoader;