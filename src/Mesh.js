'use strict';

import { gl } from './Context';
import Entity from './Entity';
import VertexArrayObject from './VertexArrayObject';
import Material from './Material';

const attributes = {
   vertices: 'position',
   colors: 'color',
   uvs: 'uv',
   normals: 'normal'
};

const _name = 'mesh';
const _vertices = [];
const _colors = [];
const _uvs = [];
const _normals = [];
const _indices = [];
const _usage = 'STATIC_DRAW';
const _primitive = 'TRIANGLES';
const _material = new Material();

class Mesh extends Entity
{
   constructor({ name = _name, buffers, loader, vertices = _vertices, colors = _colors, uvs = _uvs, normals = _normals, indices = _indices, usage = _usage, primitive = _primitive, material = _material } = {})
   {
      super({ name });

      this.buffers = buffers;

      this.vertices = vertices;

      this.colors = colors;

      this.uvs = uvs;

      this.normals = normals;

      this.indices = indices;

      this.usage = usage;

      this.primitive = primitive;

      this.material = material;

      this.scale = [1, 1, 1];

      this.rotation = 0;

      this.translation = [0, 0, 0];

      this.inheritance = ['Entity', 'Mesh'];

      this.unpack(loader);
      this.generate();
      this.configure();
   }

   get buffers()
   {
      return this._buffers;
   }

   set buffers(buffers)
   {
      this._buffers = buffers;
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
      this._indices = new Uint16Array(indices);
   }

   get usage()
   {
      return this._usage;
   }

   set usage(usage)
   {
      this._usage = gl[usage];
   }

   get primitive()
   {
      return this._primitive;
   }

   set primitive(primitive)
   {
      this._primitive = gl[primitive];
   }

   get material()
   {
      return this._material;
   }

   set material(material)
   {
      this._material = material;
   }

   get scale()
   {
      return this._scale;
   }

   set scale(scale)
   {
      this._scale = scale;
   }

   get rotation()
   {
      return this._rotation;
   }

   set rotation(rotation)
   {
      this._rotation = rotation;
   }

   get translation()
   {
      return this._translation;
   }

   set translation(translation)
   {
      this._translation = translation;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   unpack(loader)
   {
      if (loader !== undefined)
      {
         this.vertices = loader.vertices;
         this.colors = loader.colors;
         this.uvs = loader.uvs;
         this.normals = loader.normals;
         this.indices = loader.indices;
      }
   }

   generate()
   {
      if (this.buffers === undefined)
      {
         let generated = [];
         let indexed = Boolean(this.indices.length);

         for (let name in attributes)
         {
            let coordinates = this[name];

            if (Boolean(coordinates.length))
            {
               generated.push(`vec${coordinates[0].length} ${attributes[name]}`);
            }
         }

         this.buffers = new VertexArrayObject({ attributes: generated, indexed });
      }
   }

   configure()
   {
      let buffers = this.buffers;
      let usage = this.usage;
      let interleaved = [];
      let vertices = this.vertices;

      vertices.map(this.interleave.bind(this, interleaved));

      buffers.bind();

      gl.bufferData(gl.ARRAY_BUFFER, new buffers.view(interleaved), usage);

      if (buffers.indexed)
      {
         let indices = this.indices;

         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, usage);

         this.count = indices.length;
      }
      else
      {
         this.count = vertices.length;
      }

      buffers.unbind();
   }

   interleave(interleaved, vertex, index)
   {
      let color = this.colors[index] || [];
      let uv = this.uvs[index] || [];
      let normal = this.normals[index] || [];
      let contatenation = [].concat(vertex, color, uv, normal);

      [].push.apply(interleaved, contatenation.map(parseFloat));
   }

   update(vertices = this.vertices)
   {
      if (this.usage === gl.DYNAMIC_DRAW)
      {
         let buffers = this.buffers;
         let interleaved = [];

         vertices.map(this.interleave.bind(this, interleaved));

         buffers.bind();

         gl.bufferSubData(gl.ARRAY_BUFFER, 0, new buffers.view(interleaved));

         buffers.unbind();
      }
      else
      {
         console.warn(`Unable to update Mesh::${this.name} vertices, not DYNAMIC_*`);
      }
   }

   draw({ program, primitive = this.primitive, offset = 0, count = this.count } = {})
   {
      let buffers = this.buffers;

      buffers.bind(program);

      if (buffers.indexed)
      {
         gl.drawElements(primitive, count, gl.UNSIGNED_SHORT, offset);
      }
      else
      {
         gl.drawArrays(primitive, offset, count);
      }

      buffers.unbind();
   }
}

export default Mesh;