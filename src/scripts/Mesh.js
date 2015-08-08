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

      /**
       * Mesh vertex array object handler
       * @var {Entity.VertexArrayObject} Entity.Mesh.vao
       * @private
       */
      this.vao = vao;

      /**
       * Mesh vertices
       * @var {Array} Entity.Mesh.vertices
       * @default []
       * @private
       */
      this.vertices = new vao.view(vertices);

      /**
       * Mesh vertex colors
       * @var {Array} Entity.Mesh.colors
       * @default []
       * @private
       */
      this.colors = colors;

      /**
       * Mesh vertex texture coordinates
       * @var {Array} Entity.Mesh.uvs
       * @default []
       * @private
       */
      this.uvs = uvs;

      /**
       * Mesh vertex normals
       * @var {Array} Entity.Mesh.normals
       * @default []
       * @private
       */
      this.normals = normals;

      /**
       * Mesh vertex array buffer data
       * @var {Array} Entity.Mesh.data
       * @default ArrayBuffer[]
       * @private
       */
      this.data = []; // todo

      /**
       * Mesh vertex array buffer primitive indices
       * @var {Array} Entity.Mesh.indices
       * @default Uint16Array[]
       * @private
       */
      this.indices = new Uint16Array(indices);

      /**
       * Flag to update the array buffer contents between draw calls
       * @var {number} Entity.Mesh.usage
       * @default gl.STATIC_DRAW
       * @private
       */
      this.usage = usage;

      this.configure();
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

      gl.bufferData(gl.ARRAY_BUFFER, this.vertices, usage);

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
   draw({ primitive = gl.TRIANGLES, offset = 0, count = false } = {})
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