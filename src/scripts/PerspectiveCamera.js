'use strict';

let Camera = require('./Camera');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;

/**
 * PerspectiveCamera configures a perspective projection into
 * the associated framebuffer
 * @class PerspectiveCamera
 * @name Entity.Camera.PerspectiveCamera
 * @extends Entity.Camera
 * @param {string} [name=perspective.camera] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Camera background color
 * @param {number} [width=gl.canvas.width] - View width
 * @param {number} [height=gl.canvas.height] - View height
 * @param {number} [fov=45] - Field of view
 * @param {number} [near=0.1] - Observable start
 * @param {number} [far=1000] - Observable end
 * @param {vec3} direction - View direction
 * @param {vec3} location - Vantage position
 * @param {vec3} [up=[0, 1, 0]] - Camera orientation
 */
class PerspectiveCamera extends Camera
{
   constructor({ name = 'perspective.camera', program, background, width = gl.canvas.width, height = gl.canvas.height, fov = 45, near = 0.1, far = 1000, direction, location, up = [0, 1, 0] } = {})
   {
      super({ name, program, background });

      /**
       * View width
       * @var {number} Entity.Camera.PerspectiveCamera.width
       * @private
       */
      this.width = width;

       /**
       * View height
       * @var {number} Entity.Camera.PerspectiveCamera.height
       * @private
       */
      this.height = height;

      /**
       * Field of view
       * @var {number} Entity.Camera.PerspectiveCamera.fov
       * @default 45
       * @private
       */
      this.fov = fov;

      /**
       * View aspect ratio
       * @var {number} Entity.Camera.PerspectiveCamera.ratio
       * @private
       */
      this.ratio = width / height;

      /**
       * Observable start
       * @var {number} Entity.Camera.PerspectiveCamera.near
       * @default 0.1
       * @private
       */
      this.near = near;

      /**
       * Observable end
       * @var {number} Entity.Camera.PerspectiveCamera.far
       * @default 1000
       * @private
       */
      this.far = far;

      /**
       * View direction
       * @var {vec3} Entity.Camera.PerspectiveCamera.direction
       * @private
       */
      this.direction = direction;

      /**
       * Vantage position
       * @var {vec3} Entity.Camera.PerspectiveCamera.location
       * @private
       */
      this.location = location;

      /**
       * Camera orientation
       * @var {vec3} Entity.Camera.PerspectiveCamera.up
       * @default [0, 1, 0]
       * @private
       */
      this.up = up;

      this.configure();
   }

   /**
    * Configure a mat4 perspective projection
    * @function Entity.Camera.PerspectiveCamera.configure
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
    * Apply perspective projection to active framebuffer
    * @function Entity.Camera.PerspectiveCamera.bind
    * @param {Entity.Structure} structure - Camera shader uniforms
    * @returns {undefined}
    */
   bind(structure)
   {
      super.bind(structure);

      gl.enable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.width, this.height);
   }
}

module.exports = PerspectiveCamera;
