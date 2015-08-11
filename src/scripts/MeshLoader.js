'use strict';

let ajax = require('./utils/ajax');
let Entity = require('./Entity');

const _name = 'mesh.loader';

/**
 * A mesh loader is a mesh file parser that extracts the collections of vertices
 * and faces that define a shape. It may also include data to shade the mesh,
 * such as vertex colors, coordinates and per-vertex/face normals, depending
 * on the mesh file format.
 * @class MeshLoader
 * @name Entity.MeshLoader
 * @extends Entity
 * @param {string} [name=mesh.loader] - Specifies the entities friendly name.
 * @param {string} path - Specifies the relative path to the mesh file.
 */
class MeshLoader extends Entity
{
   constructor({ name = _name, path } = {})
   {
      super({ name });

      /**
       * The mesh loader xhr promise handler to help emulate synchronous
       * behaviour (callback execution).
       * @var {Promise} Entity.MeshLoader.request
       */
      this.request = undefined;

      /**
       * The mesh vertex positions.
       * @var {Array} [Entity.MeshLoader.vertices=[]]
       */
      this.vertices = [];

      /**
       * The mesh vertex texture mapping coordinates.
       * @var {Array} [Entity.MeshLoader.uvs=[]]
       */
      this.uvs = [];

      /**
       * The mesh vertex normals.
       * @var {Array} [Entity.MeshLoader.normals=[]]
       */
      this.normals = [];

      /**
       * A temporary storage buffer for the mesh data to assist
       * generating the mesh data arrays, if necessary.
       * This object is automatically deleted once the mesh data
       * has been allocated to their properties.
       * @var {object} [Entity.MeshLoader.tmp={ vertices: [], colors: [], uvs: [], normals: [] }]
       */
      this.tmp = {
         vertices: [],
         colors: [],
         uvs: [],
         normals: []
      };

      /**
       * The indices used to construct the primitives.
       * @var {Array} [Entity.MeshLoader.indices=[]]
       */
      this.indices = [];

      this.fetch(path);
   }

   /**
    * Asynchronously fetches the mesh file contents, parses it, and
    * subsequently deletes the <code>tmp</code> temporary storage buffer.
    * @function Entity.MeshLoader.fetch
    * @param {string} path - Specifies the relative path to the mesh file.
    * @returns {undefined}
    */
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