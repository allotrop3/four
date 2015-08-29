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

class PerspectiveCamera extends Camera
{
   constructor({ name = _name, path, uniforms, background, width = _width, height = _height, fov = _fov, near = _near, far = _far, direction = _direction, location, up = _up } = {})
   {
      super({ name, path, uniforms, background });

      this.width = width;

      this.height = height;

      this.fov = fov;

      this.ratio = width / height;

      this.near = near;

      this.far = far;

      this.direction = direction;

      this.location = location;

      this.up = up;

      this.configure();
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

   bind(program)
   {
      super.bind(program);

      gl.enable(gl.DEPTH_TEST);
      gl.viewport(0, 0, this.width, this.height);
   }
}

module.exports = PerspectiveCamera;
