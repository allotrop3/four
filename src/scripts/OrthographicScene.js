'use strict';

let Scene = require('./Scene');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;

/**
 * OrthographicScene configures an othographic projection into
 * the associated framebuffer
 * @class OrthographicScene
 * @name OrthographicScene
 * @extends Scene
 * @param {string} [name=orthographic.scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 * @param {number} [left=-1] - View left start
 * @param {number} right - View right end
 * @param {number} [top=-1] - View top start
 * @param {number} bottom - View bottom end
 * @param {number} [near=0.1] - Observable start
 * @param {number} [far=1] - Observable end
 */
class OrthographicScene extends Scene
{
   constructor({ name = 'orthographic.scene', background, left = -1, right, bottom, top = -1, near = 0.1, far = 1 } = {})
   {
      super({ name, background });

      /**
       * View left start
       * @var {number} OrthographicScene.left
       * @default -1
       * @private
       */
      this.left = left;

      /**
       * View right end
       * @var {number} OrthographicScene.right
       * @private
       */
      this.right = right;

      /**
       * View bottom end
       * @var {number} OrthographicScene.bottom
       * @private
       */
      this.bottom = bottom;

      /**
       * View top start
       * @var {number} OrthographicScene.top
       * @default -1
       * @private
       */
      this.top = top;

      /**
       * Observable start
       * @var {number} OrthographicScene.near
       * @default 0.1
       * @private
       */
      this.near = near;

      /**
       * Observable end
       * @var {number} OrthographicScene.far
       * @default 1
       * @private
       */
      this.far = far;
   }

   /**
    * Configure a mat4 orthographic projection
    * @function OrthographicScene.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
      mat4.identity(this.modelViewMatrix);
   }

   /**
    * Apply orthographic projection to active framebuffer
    * @function OrthographicScene.bind
    * @returns {undefined}
    */
   bind()
   {
      super.bind();

      gl.disable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.right, this.top);
   }
}

module.exports = OrthographicScene;
