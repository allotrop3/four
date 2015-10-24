'use strict';

let MeshLoader = require('./MeshLoader');

const _name = 'obj.mesh.loader';

class OBJMeshLoader extends MeshLoader
{
   constructor({ name = _name, path } = {})
   {
      super({ name, path });

      this.inheritance = ['Entity', 'MeshLoader', 'OBJMeshLoader'];
   }

   parse(raw)
   {
      raw.split('\n').map(this.categorise.bind(this));
   }

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

   recategorise(word)
   {
      let indices = word.split('/').map(value => value - 1);
      let tmp = this.tmp;
      let position = tmp.vertices[indices[0]];
      let uv = tmp.uvs[indices[1]];
      let normal = tmp.normals[indices[2]];

      if (position !== undefined)
      {
         this.vertices.push(position);
      }

      if (uv !== undefined)
      {
         this.uvs.push(uv);
      }

      if (normal !== undefined)
      {
         this.normals.push(normal);
      }
   }
}

module.exports = OBJMeshLoader;