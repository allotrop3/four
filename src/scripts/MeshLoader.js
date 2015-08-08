'use strict';

let Entity = require('./Entity');
let ajax = require('./utils/ajax');

/**
 * MeshLoader is a base class to parse
 * different mesh data formats – OBJ
 * @class MeshLoader
 * @name Entity.MeshLoader
 * @extends Entity
 * @param {string} [name=mesh.loader] - Instance name
 * @param {string} path - Filepath to mesh data
 */
class MeshLoader extends Entity
{
   constructor({ name = 'mesh.loader', path } = {})
   {
      super({ name });

      this.vertices = [];

      this.uvs = [];

      this.normals = [];

      this.tmp = {
         colors: [],
         uvs: [],
         normals: []
      };

      this.indices = [];

      this.fetch(path);
   }

   /**
    * Fetch and parse the mesh data
    * @function Entity.MeshLoader.fetch
    * @param {string} path - Filepath to mesh data
    * @returns {undefined}
    */
   fetch(path)
   {
      ajax(path).then(this.parse.bind(this));
   }
}

module.exports = MeshLoader;