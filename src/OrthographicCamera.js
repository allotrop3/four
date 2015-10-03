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

class OrthographicCamera extends Camera
{
   constructor({ name = _name, path, uniforms, background, left = _left, right, bottom, top = _top, near = _near, far = _far } = {})
   {
      super({ name, path, uniforms, background });

      this.left = left;

      this.right = right;

      this.bottom = bottom;

      this.top = top;

      this.near = near;

      this.far = far;
      
      this.inheritance = ['Entity', 'Structure', 'Camera', 'OrthographicCamera'];

      this.configure();
   }

   configure()
   {
      super.configure();

      mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
      mat4.identity(this.modelViewMatrix);
   }

   bind(program)
   {
      super.bind(program);

      gl.disable(gl.DEPTH_TEST);
      gl.viewport(this.left, this.top, this.right, this.bottom);
   }
}

module.exports = OrthographicCamera;
