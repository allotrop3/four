'use strict';

let Scene = require('./Scene');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;

class OrthographicScene extends Scene
{
   constructor(left, right, bottom, top, near, far, background = [0, 0, 0, 1], name = 'orthographic.scene')
   {
      super(name, background);

      this.left = left;
      this.right = right;
      this.bottom = bottom;
      this.top = top;
      this.near = near;
      this.far = far;
   }

   configure()
   {
      super.configure();

      mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
      mat4.identity(this.modelViewMatrix);
   }

   bind()
   {
      super.bind();

      gl.disable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.right, this.top);
   }
}

module.exports = OrthographicScene;
