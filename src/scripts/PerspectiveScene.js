'use strict';

let Scene = require('./Scene');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;

class PerspectiveScene extends Scene
{
   constructor(fov, ratio, near, far, direction, location, up, background, name = 'perspective.scene')
   {
      super(background, name);

      this.fov = fov;
      this.ratio = ratio;
      this.near = near;
      this.far = far;
      this.direction = direction;
      this.location = location;
      this.up = up;
   }

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

   bind()
   {
      super.bind();

      gl.enable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.width, this.height);
   }
}

module.exports = PerspectiveScene;
