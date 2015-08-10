'use strict';

let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let Camera = require('./Camera');

const _name = 'orthographic.camera';
const _left = -1;
const _top = -1;
const _near = 0.1;
const _far = 1;

/**
 * An orthographic camera produces a two dimensional projection into framebuffers.
 * @class OrthographicCamera
 * @name Entity.Camera.OrthographicCamera
 * @extends Entity.Camera
 * @param {string} [name=orthographic.camera] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the camera used.
 * @param {string} [path=camera] - Specifies the uniform structure path to the generic uniforms.
 * @param {Array} [uniforms=['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix']] - Specifies the formats and names of the generic uniforms as used in the shader.
 * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
 * @param {number} [left=-1] - Specifies the left most boundary of the projection.
 * @param {number} right - Specifies the right most boundary of the projection.
 * @param {number} [top=-1] - Specifies the top most boundary of the projection.
 * @param {number} bottom - Specifies the bottom most boundary of the projection.
 * @param {number} [near=0.1] - Specifies the front most boundary of the projection.
 * @param {number} [far=1] - Specifies the back most boundary of the projection.
 */
class OrthographicCamera extends Camera
{
   constructor({ name = _name, program, path, uniforms, background, left = _left, right, bottom, top = _top, near = _near, far = _far } = {})
   {
      super({ name, program, path, uniforms, background });

      /**
       * The left most boundary of the projection.
       * @var {number} [Entity.Camera.OrthographicCamera.left=-1]
       */
      this.left = left;

      /**
       * The right most boundary of the projection.
       * @var {number} Entity.Camera.OrthographicCamera.right
       */
      this.right = right;

      /**
       * The bottom most boundary of the projection.
       * @var {number} Entity.Camera.OrthographicCamera.bottom
       */
      this.bottom = bottom;

      /**
       * The top most boundary of the projection.
       * @var {number} [Entity.Camera.OrthographicCamera.top=-1]
       */
      this.top = top;

      /**
       * Specifies the front most boundary of the projection.
       * @var {number} [Entity.Camera.OrthographicCamera.near=0.1]
       */
      this.near = near;

      /**
       * The back most boundary of the projection.
       * @var {number} [Entity.Camera.OrthographicCamera.far=1]
       */
      this.far = far;

      this.configure();
   }

   /**
    * Generates an orthogonal projection matrix with the given bounds and
    * initialises the modelview matrix to an identity matrix.
    * @function Entity.Camera.OrthographicCamera.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
      mat4.identity(this.modelViewMatrix);
   }

   /**
    * Specify the value of the uniform variables for the current program object;
    * disable depth testing and set the viewport boundaries with the given
    * bounds.
    * @function Entity.Camera.OrthographicCamera.bind
    * @returns {undefined}
    */
   bind()
   {
      super.bind();

      gl.disable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.right, this.top);
   }
}

module.exports = OrthographicCamera;
