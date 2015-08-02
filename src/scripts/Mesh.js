'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Mesh
 * @class Mesh
 * @name Entity.Mesh
 * @extends Entity
 * @param {string} [name=mesh] - Instance name
 * @param {Entity.VertexArrayObject} vao - Vertex array object handler
 * @param {Array} [vertices=[]] - Mesh vertex positions
 * @param {Array} [colors=[]] - Mesh vertex colors
 * @param {Array} [uvs=[]] - Mesh vertex uv mapping
 * @param {boolean|Array} [indices=false] - Mesh draw indices
 * @param {number} [usage=gl.STATIC_DRAW] - Mesh vertex draw usage
 */
class Mesh extends Entity
{
   constructor({ name = 'mesh', vao, vertices = [], colors = [], uvs = [], normals = [], indices = [], usage = gl.STATIC_DRAW } = {})
   {
      super({ name });
      
      this.vao = vao;
      this.vertices = vertices;
      this.colors = colors;
      this.uvs = uvs;
      this.normals = normals;
      this.data = this.combine();
      this.indices = new Uint16Array(indices);
      this.usage = usage;
   }
   
   /**
    * Fetch vertex attributes' values at the
    * given index
    * @callback Entity.Mesh.weave
    * @param {string} [empty=undefined] - Filler value
    * @param {number} index - Filler array index
    * @returns {Array}
    */
   weave(empty, index)
   {
      let vertex = this.vertices[index];
      let color = this.colors[index];
      let uv = this.uvs[index];
      let normal = this.normals[index];
      
      return [].concat(vertex, color, uv, normal);
   }
   
   /**
    * Interleave mesh attributes for optimal perforance
    * @function Entity.Mesh.combine
    * @returns {Float32Array}
    */
   combine()
   {
      let data = 'undefined'.repeat(this.vertices.length).substring(1).split(',').map(this.weave);
      
      return new Float32Array(data);
   }
   
   /**
    * Configure the vao contents for rendering
    * @function Entity.Mesh.configure
    * @returns {undefined}
    */
   configure()
   {
      let vao = this.vao;
      let usage = this.usage;
      
      vao.bind();
      
      gl.bufferData(gl.ARRAY_BUFFER, this.data, usage);
      
      if (vao.indexed)
      {
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, usage);
      }
      
      vao.unbind();
   }
   
   /**
    * Render mesh
    * @function Entity.Mesh.draw
    * @param {number} [primitive=gl.TRIANGLES] - Mesh vertex construction method
    * @param {number} [offset=0] - Index to start drawing from
    * @param {boolean|number} [count=false] - Number of vertices to draw
    * @returns {undefined}
    */
   draw(primitive = gl.TRIANGLES, offset = 0, count = false)
   {
      let vao = this.vao;
      
      vao.bind();
      
      if (vao.indexed)
      {
         gl.drawElements(primitive, count, gl.UNSIGNED_SHORT, offset);
      }
      else
      {
         gl.drawArrays(primitive, offset, count);
      }
      
      vao.unbind();
   }
}

module.exports = Mesh;