'use strict';

import ajax from './utils/ajax';
import Entity from './Entity';

const _name = 'mesh.loader';
const _indexed = false;

class MeshLoader extends Entity
{
   constructor({ name = _name, path, indexed = _indexed } = {})
   {
      super({ name });

      this.request = undefined;

      this.vertices = [];

      this.colors = [];

      this.uvs = [];

      this.normals = [];

      this.tmp = {
         vertices: [],
         colors: [],
         uvs: [],
         normals: []
      };

      this.indices = [];

      this.indexed = indexed;

      this.inheritance = ['Entity', 'MeshLoader'];

      this.fetch(path);
   }

   get request()
   {
      return this._request;
   }

   set request(request)
   {
      this._request = request;
   }

   get vertices()
   {
      return this._vertices;
   }

   set vertices(vertices)
   {
      this._vertices = vertices;
   }

   get colors()
   {
      return this._colors;
   }

   set colors(colors)
   {
      this._colors = colors;
   }

   get uvs()
   {
      return this._uvs;
   }

   set uvs(uvs)
   {
      this._uvs = uvs;
   }

   get normals()
   {
      return this._normals;
   }

   set normals(normals)
   {
      this._normals = normals;
   }

   get indices()
   {
      return this._indices;
   }

   set indices(indices)
   {
      this._indices = indices;
   }

   get indexed()
   {
      return this._indexed;
   }

   set indexed(indexed)
   {
      this._indexed = indexed;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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

export default MeshLoader;