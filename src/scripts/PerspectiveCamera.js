'use strict';

let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let Camera = require('./Camera');

const _name = 'perspective.camera';
const _width = gl.canvas.width;
const _height = gl.canvas.height;
const _fov = 45;
const _near = 0.1;
const _far = 1000;
const _direction = [0, 0, 0];
const _up = [0, 1, 0];

/**
 * An perspective camera produces a three dimensional projection into framebuffers.
 * @class PerspectiveCamera
 * @name Entity.Structure.Camera.PerspectiveCamera
 * @extends Entity.Structure.Camera
 * @param {string} [name=perspective.camera] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the camera used.
 * @param {string} [path=camera] - Specifies the uniform structure path to the generic uniforms.
 * @param {Array} [uniforms=['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix']] - Specifies the uniform variables
 * as is declared in the shader. The names imply the `u_` namespace is used as per the uniform variable naming convention.
 * If a `struct` path is defined, the `u_` namespace is implied on this instead.
 * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
 * @param {number} [width=gl.canvas.width] - Specifies the projection width. The initial value is set to the width of the canvas.
 * @param {number} [height=gl.canvas.height] - Specifies the projection height. The initial value is set to the height of the canvas.
 * @param {number} [fov=45] - Specifies the field of view of the projection.
 * @param {number} [near=0.1] - Specifies the front most boundary of the projection.
 * @param {number} [far=1000] - Specifies the back most boundary of the projection.
 * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the projection is aimed.
 * @param {vec3} location - Specifies the position of the projection.
 * @param {vec3} [up=[0, 1, 0]] - Specifies the orientation of the projection.
 */
class PerspectiveCamera extends Camera
{
   constructor({ name = _name, program, path, uniforms, background, width = _width, height = _height, fov = _fov, near = _near, far = _far, direction = _direction, location, up = _up } = {})
   {
      super({ name, program, path, uniforms, background });

      /**
       * The projection width. The initial value is set to the width of the canvas.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.width=gl.canvas.width]
       */
      this.width = width;

       /**
       * The projection height. The initial value is set to the height of the canvas.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.height=gl.canvas.height]
       */
      this.height = height;

      /**
       * The field of view of the projection.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.fov=45]
       */
      this.fov = fov;

      /**
       * The aspect ratio of the projection. This is calculated by dividing the width
       * of the projection by its height.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.ratio=gl.canvas.width/gl.canvas.height]
       */
      this.ratio = width / height;

      /**
       * Specifies the front most boundary of the projection.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.near=0.1]
       */
      this.near = near;

      /**
       * Specifies the back most boundary of the projection.
       * @var {number} [Entity.Structure.Camera.PerspectiveCamera.far=1000]
       */
      this.far = far;

      /**
       * The position at which the projection is aimed.
       * @var {vec3} [Entity.Structure.Camera.PerspectiveCamera.direction=[0, 0, 0]]
       */
      this.direction = direction;

      /**
       * The position of the projection.
       * @var {vec3} Entity.Structure.Camera.PerspectiveCamera.location
       */
      this.location = location;

      /**
       * The orientation of the projection.
       * @var {vec3} [Entity.Structure.Camera.PerspectiveCamera.up=[0, 1, 0]]
       */
      this.up = up;

      this.configure();
   }

   /**
    * Generates a perspective projection matrix with the given bounds;
    * initialises the modelview matrix to an identity matrix and subsequently
    * computes a look-at matrix with the given eye position, focal point, and up axis.
    * @function Entity.Structure.Camera.PerspectiveCamera.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      let modelViewMatrix = this.modelViewMatrix;

      gl.clearDepth(1);
      gl.depthFunc(gl.LEQUAL);

      mat4.perspective(this.projectionMatrix, this.fov, this.ratio, this.near, this.far);
      mat4.identity(modelViewMatrix);
      mat4.lookAt(modelViewMatrix, this.location, this.direction, this.up);
   }

   /**
    * Specify the value of the uniform variables for the current program object;
    * enable depth testing and set the viewport boundaries with the given
    * bounds.
    * @function Entity.Structure.Camera.PerspectiveCamera.bind
    * @returns {undefined}
    */
   bind()
   {
      super.bind();

      gl.enable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.width, this.height);
   }
}

module.exports = PerspectiveCamera;
