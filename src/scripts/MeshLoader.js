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

      /**
       * Mesh vertices
       * @var {Array} Entity.MeshLoader.vertices
       * @default []
       * @private
       */
      this.vertices = [];

      /**
       * Mesh vertex texture coordinates
       * @var {Array} Entity.MeshLoader.uvs
       * @default []
       * @private
       */
      this.uvs = [];

      /**
       * Mesh vertex normals
       * @var {Array} Entity.MeshLoader.normals
       * @default []
       * @private
       */
      this.normals = [];

      /**
       * Temporary storage for vertex data
       * to assist parsing the contents of the
       * mesh file
       * @var {Array} Entity.MeshLoader.tmp
       * @default { colors: [], uvs: [], normals: [] }
       * @private
       */
      this.tmp = {
         vertices: [],
         colors: [],
         uvs: [],
         normals: []
      };

      /**
       * Mesh vertex array buffer primitive indices
       * @var {Array} Entity.MeshLoader.indices
       * @default []
       * @private
       */
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