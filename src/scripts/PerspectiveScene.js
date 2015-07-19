'use strict';

let Scene = require('./Scene');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;

/**
 * PerspectiveScene configures a perspective projection into
 * the associated framebuffer
 * @class PerspectiveScene
 * @name PerspectiveScene
 * @extends Scene
 * @param {string} [name=perspective.scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 * @param {number} width - View width
 * @param {number} height - View height
 * @param {number} [fov=45] - Field of view
 * @param {number} ratio - View aspect ratio
 * @param {number} [near=0.1] - Observable start
 * @param {number} [far=1000] - Observable end
 * @param {vec3} direction - View direction
 * @param {vec3} location - Vantage position
 * @param {vec3} [up=[0, 1, 0]] - Scene orientation
 */
class PerspectiveScene extends Scene
{
   constructor({ name = 'perspective.scene', background, width, height, fov = 45, ratio, near = 0.1, far = 1000, direction, location, up = [0, 1, 0] } = {})
   {
      super({ name, background });

      /**
       * View width
       * @var {number} PerspectiveScene.width
       * @private
       */
       this.width = width;

       /**
       * View height
       * @var {number} PerspectiveScene.height
       * @private
       */
       this.height = height;

      /**
       * Field of view
       * @var {number} PerspectiveScene.fov
       * @default 45
       * @private
       */
      this.fov = fov;

      /**
       * View aspect ratio
       * @var {number} PerspectiveScene.ratio
       * @private
       */
      this.ratio = ratio;

      /**
       * Observable start
       * @var {number} PerspectiveScene.near
       * @default 0.1
       * @private
       */
      this.near = near;

      /**
       * Observable end
       * @var {number} PerspectiveScene.far
       * @default 1000
       * @private
       */
      this.far = far;

      /**
       * View direction
       * @var {vec3} PerspectiveScene.direction
       * @private
       */
      this.direction = direction;

      /**
       * Vantage position
       * @var {vec3} PerspectiveScene.location
       * @private
       */
      this.location = location;

      /**
       * Scene orientation
       * @var {vec3} PerspectiveScene.up
       * @default [0, 1, 0]
       * @private
       */
      this.up = up;
   }

   /**
    * Configure a mat4 perspective projection
    * @function PerspectiveScene.configure
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
    * @function PerspectiveScene.bind
    * @returns {undefined}
    */
   bind()
   {
      super.bind();

      gl.enable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.width, this.height);
   }
}

module.exports = PerspectiveScene;
