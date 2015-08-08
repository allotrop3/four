'use strict';

let MeshLoader = require('./MeshLoader');

/**
 * OBJMeshLoader is a base class to parse
 * OBJ mesh data
 * @class OBJMeshLoader
 * @name Entity.MeshLoader.OBJMeshLoader
 * @extends Entity
 * @param {string} [name=obj.mesh.loader] - Instance name
 * @param {string} path - Filepath to mesh data
 */
class OBJMeshLoader extends MeshLoader
{
   constructor({ name = 'obj.mesh.loader', path } = {})
   {
      super({ name, path });
   }

   /**
    * Parse the obj mesh data line by line
    * @callback Entity.MeshLoader.OBJMeshLoader.parse
    * @param {string} raw - Mesh data
    * @returns {undefined}
    */
   parse(raw)
   {
      raw.split('\n').map(this.categorise.bind(this));

      delete this.tmp;
   }

   /**
    * Push data into appropriate vertex data arrays
    * @callback Entity.MeshLoader.OBJMeshLoader.categorise
    * @param {string} line - Mesh file line
    * @returns {undefined}
    */
   categorise(line)
   {
      let words = line.split(' ');
      let type = words.shift();

      switch (type)
      {
         case 'v':
            this.vertices.push(words);
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
    * Recategorise vertex data arrays based on
    * face indices
    * @callback Entity.MeshLoader.OBJMeshLoader.index
    * @param {string} word - Vertex face word
    * @returns {undefined}
    */
   recategorise(word)
   {
      let indices = word.split('/').map(this.decrement);
      let indice = indices[0];
      let tmp = this.tmp;

      this.uvs[indice] = tmp.uvs[indices[1]];
      this.normals[indice] = tmp.normals[indices[2]];

      this.indices.push(indice);
   }

   /**
    * Decrement the given value by 1
    * @callback Entity.MeshLoader.OBJMeshLoader.decrement
    * @param {string|number} value - Value to decrement
    * @returns {undefined}
    */
   decrement(value)
   {
      return value - 1;
   }
}

module.exports = OBJMeshLoader;