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
 * @param {Entity.Structure.Material|Entity.Structure.PhongMaterial} material - Mesh material
 */
class Mesh extends Entity
{
   constructor({ name = 'mesh', vao, vertices = [], colors = [], uvs = [], normals = [], indices = [], usage = gl.STATIC_DRAW, material } = {})
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
       * @var {Array} [Entity.Mesh.vertices=[]]
       * @private
       */
      this.vertices = vertices;

      /**
       * Mesh vertex colors
       * @var {Array} [Entity.Mesh.colors=[]]
       * @private
       */
      this.colors = colors;

      /**
       * Mesh vertex texture coordinates
       * @var {Array} [Entity.Mesh.uvs=[]]
       * @default []
       * @private
       */
      this.uvs = uvs;

      /**
       * Mesh vertex normals
       * @var {Array} [Entity.Mesh.normals=[]]
       * @private
       */
      this.normals = normals;

      /**
       * Mesh vertex array buffer primitive indices
       * @var {Array} [Entity.Mesh.indices=Uint16Array[]]
       * @private
       */
      this.indices = new Uint16Array(indices);

      /**
       * Flag to update the array buffer contents between draw calls
       * @var {number} [Entity.Mesh.usage=gl.STATIC_DRAW]
       * @private
       */
      this.usage = usage;

      /**
       * Mesh material
       * @var {Entity.Structure.Material*} Entity.Mesh.material
       * @private
       */
      this.material = material;

      /**
       * Mesh scale
       * @var {vec3} [Entity.Mesh.scale=[1, 1, 1]]
       * @private
       */
      this.scale = [1, 1, 1];

      /**
       * Mesh rotation in degrees
       * @var {number} [Entity.Mesh.rotation=0]
       * @private
       */
      this.rotation = 0;

      /**
       * Mesh translation
       * @var {vec3} [Entity.Mesh.translation=[0, 0, 0]]
       * @private
       */
      this.translation = [0, 0, 0];

      this.configure();
   }

   /**
    * Configure the vbo contents for rendering
    * @function Entity.Mesh.configure
    * @returns {undefined}
    */
   configure()
   {
      let vao = this.vao;
      let usage = this.usage;
      let interleaved = [];
      let vertices = this.vertices;

      vertices.map(this.interleave.bind(this, interleaved));

      vao.bind();

      gl.bufferData(gl.ARRAY_BUFFER, new this.vao.view(interleaved), usage);

      if (vao.indexed)
      {
         let indices = this.indices;

         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, usage);

         this.count = indices;
      }
      else
      {
         this.count = vertices.length;
      }

      vao.unbind();
   }

   /**
    * Render mesh
    * @callback Entity.Mesh.interleave
    * @param {Array} interleaved - Interleaved vertex data
    * @param {vec3} vertex - Current vertex coordinate
    * @param {numebr} index - Vertex coordinate array index
    * @returns {undefined}
    */
   interleave(interleaved, vertex, index)
   {
      let color = this.colors[index] || [];
      let uv = this.uvs[index] || [];
      let normal = this.normals[index] || [];
      let contatenation = [].concat(vertex, color, uv, normal);

      [].push.apply(interleaved, contatenation.map(parseFloat));
   }

   /**
    * Render mesh
    * @function Entity.Mesh.draw
    * @param {number} [primitive=gl.TRIANGLES] - Mesh vertex construction method
    * @param {number} [offset=0] - Index to start drawing from
    * @param {boolean|number} [count=this.count] - Number of vertices to draw
    * @returns {undefined}
    */
   draw({ primitive = gl.TRIANGLES, offset = 0, count = this.count } = {})
   {
      let vao = this.vao;

      this.material.bind();

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