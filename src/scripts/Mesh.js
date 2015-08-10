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

/**
 * A mesh is a collection of vertices and faces that define the construction of a shape.
 * It further includes information to shade the mesh, such as vertex colors, texture mapping
 * coordinates and face normals.
 * @class Mesh
 * @name Entity.Mesh
 * @extends Entity
 * @param {string} [name=mesh] - Specifies the entities friendly name.
 * @param {Entity.VertexArrayObject} vao - Specifies the vertex array object via which the
 * mesh data is stored and sent to the shader.
 * @param {Array} [vertices=[]] - Specifies the mesh vertex positions.
 * @param {Array} [colors=[]] - Specifies the mesh vertex colors.
 * @param {Array} [uvs=[]] - Specifies the mesh vertex texture mapping coordinates.
 * @param {Array} [normals=[]] - Specifies the mesh vertex normals.
 * @param {boolean|Array} [indices=false] - Specifies the indices used to construct
 * the primitives if it uses an element array buffer object. If it does not,
 * this value is set to false. The initial value is false.
 * @param {number} [usage=gl.STATIC_DRAW] - Specifies the expected usage pattern of the data store.
 * @param {Entity.Structure.Material|Entity.Structure.Material.PhongMaterial} material - Specifies the
 * visual make-up of the mesh.
 */
class Mesh extends Entity
{
   constructor({ name = _name, vao, vertices = _vertices, colors = _colors, uvs = _uvs, normals = _normals, indices = _indices, usage = _usage, material } = {})
   {
      super({ name });

      /**
       * The vertex array object via which the mesh data
       * is stored and sent to the shader.
       * @var {Entity.VertexArrayObject} Entity.Mesh.vao
       */
      this.vao = vao;

      /**
       * The mesh vertex positions
       * @var {Array} [Entity.Mesh.vertices=[]]
       */
      this.vertices = vertices;

      /**
       * The mesh vertex colors.
       * @var {Array} [Entity.Mesh.colors=[]]
       */
      this.colors = colors;

      /**
       * The mesh vertex texture mapping coordinates.
       * @var {Array} [Entity.Mesh.uvs=[]]
       */
      this.uvs = uvs;

      /**
       * The mesh vertex normals.
       * @var {Array} [Entity.Mesh.normals=[]]
       */
      this.normals = normals;

      /**
       * The indices used to constructthe primitives if it
       * uses an element array buffer object. If it does not,
       * this value is set to false. The initial value is false.
       * @var {Array} [Entity.Mesh.indices=Uint16Array]
       */
      this.indices = new Uint16Array(indices);

      /**
       * The expected usage pattern of the data store.
       * @var {number} [Entity.Mesh.usage=gl.STATIC_DRAW]
       */
      this.usage = usage;

      /**
       * The visual make-up of the mesh.
       * @var {Entity.Structure.Material|Entity.Structure.Material.PhongMaterial} Entity.Mesh.material
       */
      this.material = material;

      /**
       * The scale of the mesh.
       * @var {vec3} [Entity.Mesh.scale=[1, 1, 1]]
       */
      this.scale = [1, 1, 1];

      /**
       * The rotation of the mesh in degrees.
       * @var {number} [Entity.Mesh.rotation=0]
       */
      this.rotation = 0;

      /**
       * The translation of the mesh.
       * @var {vec3} [Entity.Mesh.translation=[0, 0, 0]]
       */
      this.translation = [0, 0, 0];

      this.configure();
   }

   /**
    * Interleave the mesh data and attach it to the appropriate
    * vertex buffer objects.
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
    * Interleave the vertices (V), colors (C), texture mapping coordinates (U),
    * and normals (N) using VVVCCCUUNNN format.
    * @callback Entity.Mesh.interleave
    * @param {Array} interleaved - Specifies the resultant
    * interleaved mesh data.
    * @param {vec3} vertex - Specifies the current vertex position.
    * @param {numebr} index - Specifies the array index of the
    * current vertex position.
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
    * Render the mesh to the active framebuffer object.
    * @function Entity.Mesh.draw
    * @param {number} [primitive=gl.TRIANGLES] - Specifies what
    * kind of primitives to render;
    * <code>gl[LINES|LINE_STRIP|LINE_LOOP|TRIANGLES|TRIANGLE_STRIP|TRIANGLE_FAN|POINTS]</code>
    * @param {number} [offset=0] - Specifies the starting index
    * in the enabled arrays.
    * @param {boolean|number} [count=this.count] - Specifies the
    * number of vertices/indices to be rendered.
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