'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'mesh';
const _vertices = [];
const _colors = [];
const _uvs = [];
const _normals = [];
const _indices = [];
const _usage = gl.STATIC_DRAW;

class Mesh extends Entity
{
   constructor({ name = _name, buffers, vertices = _vertices, colors = _colors, uvs = _uvs, normals = _normals, indices = _indices, usage = _usage, material } = {})
   {
      super({ name });

      this.buffers = buffers;

      this.vertices = vertices;

      this.colors = colors;

      this.uvs = uvs;

      this.normals = normals;

      this.indices = new Uint16Array(indices);

      this.usage = usage;

      this.material = material;

      this.scale = [1, 1, 1];

      this.rotation = 0;

      this.translation = [0, 0, 0];

      this.configure();
   }

   configure()
   {
      let buffers = this.buffers;
      let usage = this.usage;
      let interleaved = [];
      let vertices = this.vertices;

      vertices.map(this.interleave.bind(this, interleaved));

      buffers.bind();

      gl.bufferData(gl.ARRAY_BUFFER, new this.buffers.view(interleaved), usage);

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

   draw({ primitive = gl.TRIANGLES, offset = 0, count = this.count } = {})
   {
      let buffers = this.buffers;

      buffers.bind();

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

module.exports = Mesh;