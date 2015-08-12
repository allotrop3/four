'use strict';

let MeshLoader = require('./MeshLoader');

const _name = 'obj.mesh.loader';

/**
 * An OBJ mesh loader is a .obj file parser that extracts the collections of vertices
 * and faces that define a shape. It may also include data to shade the mesh, such as
 * vertex colors, coordinates and per-vertex/face normals.
 * @class OBJMeshLoader
 * @name Entity.MeshLoader.OBJMeshLoader
 * @extends Entity
 * @param {string} [name=mesh.loader] - Specifies the entities friendly name.
 * @param {string} path - Specifies the relative path to the mesh file.
 */
class OBJMeshLoader extends MeshLoader
{
   constructor({ name = _name, path } = {})
   {
      super({ name, path });
   }

   /**
    * Parses the contents of the OBJ mesh file.
    * @callback Entity.MeshLoader.OBJMeshLoader.parse
    * @param {string} raw - The OBJ mesh file contents.
    * @returns {undefined}
    */
   parse(raw)
   {
      raw.split('\n').map(this.categorise.bind(this));
   }

   /**
    * Populate the mesh data arrays with the given contents of the
    * OBJ mesh file.
    * @callback Entity.MeshLoader.OBJMeshLoader.categorise
    * @param {string} line - Specifies an excerpt from the OBJ mesh
    * file to parse.
    * @returns {undefined}
    */
   categorise(line)
   {
      let words = line.split(' ');
      let type = words.shift();

      switch (type)
      {
         case 'v':
            this.tmp.vertices.push(words);
            break;

         case 'vt':
            this.tmp.uvs.push(words);
            break;

         case 'vn':
            this.tmp.normals.push(words);
            break;

         case 'f':
            words.map(this.recategorise.bind(this));
            break;
      }
   }

   /**
    * Recategorise the mesh data in the temporary storage buffer
    * to the mesh data arrays using the indices defined in the OBJ
    * mesh file.
    * @callback Entity.MeshLoader.OBJMeshLoader.index
    * @param {string} word - Specifies the indices to the vertex position,
    * texture mapping coordinate and per-vertex/face normals in the
    * temporary storage buffer for a vertex instance.
    * @returns {undefined}
    */
   recategorise(word)
   {
      let indices = word.split('/').map(this.decrement);
      let tmp = this.tmp;

      this.vertices.push(tmp.vertices[indices[0]]);
      this.uvs.push(tmp.uvs[indices[1]]);
      this.normals.push(tmp.normals[indices[2]]);
   }

   /**
    * Decrements the given value by 1.
    * @callback Entity.MeshLoader.OBJMeshLoader.decrement
    * @param {string|number} value - Specifies the number to decrement.
    * @returns {number}
    */
   decrement(value)
   {
      return value - 1;
   }
}

module.exports = OBJMeshLoader;