'use strict';

let Mesh = require('./Mesh');
let OBJMeshLoader = require('./OBJMeshLoader');

class OBJMesh extends Mesh
{
   constructor({ name = 'obj.mesh', path })
   {
      super({ name });

      fetch(path);
   }

   fetch(path)
   {
      let objMeshLoader = new OBJMeshLoader({ path: path });

      objMeshLoader.request.then(this.configure.bind(this));
   }

   configure(objMeshLoader)
   {
      this.vertices = objMeshLoader.vertices;
      this.uvs = objMeshLoader.uvs;
      this.normals = objMeshLoader.normals;

      super.configure();
   }
}