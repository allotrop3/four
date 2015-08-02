'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Mesh
 * @class Mesh
 * @name Entity.Mesh
 * @extends Entity
 * @param {string} [name=mesh] - Instance name
 * @param {Array} [vertices=[]] - Mesh vertex positions
 * @param {Array} [colors=[]] - Mesh vertex colors
 * @param {Array} [uvs=[]] - Mesh vertex uv mapping
 * @param {boolean|Array} [indices=false] - Mesh draw indices
 * @param {number} [primitive=gl.TRIANGLES] - Mesh vertex construction method
 * @param {number} [method=gl.STATIC_DRAW] - Mesh vertex draw method
 */
class Mesh extends Entity
{
   constructor({ name = 'mesh', vao, vertices = [], colors = [], uvs = [], normals = [], indices = false, primitive = gl.TRIANGLES, method = gl.STATIC_DRAW } = {})
   {
      super({ name });
      
      this.vao = vao;
      this.vertices = vertices;
      this.colors = colors;
      this.uvs = uvs;
      this.normals = normals;
      this.data = this.combine();
      this.indices = indices;
      this.primitive = primitive;
      this.method = method;
   }
   
   weave(empty, index)
   {
      let vertex = this.vertices[index];
      let color = this.colors[index];
      let uv = this.uvs[index];
      let normal = this.normals[index];
      
      return [].concat(vertex, color, uv, normal);
   }
   
   combine()
   {
      return '0'.repeat(this.vertices.length).substring(1).split(',').map(this.weave);
   }
   
   configure()
   {
      
   }
   
   draw()
   {
      
   }
}

module.exports = Mesh;