'use strict';

let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let Camera = require('./Camera');

const _name = 'orthographic.camera';
const _left = -1;
const _bottom = -1;
const _near = 0.1;
const _far = 1;

class OrthographicCamera extends Camera
{
   constructor({ name = _name, path, uniforms, background, left = _left, right, bottom = _bottom, top, near = _near, far = _far } = {})
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

   get left()
   {
      return this._left;
   }

   set left(left)
   {
      this._left = left;
   }

   get right()
   {
      return this._right;
   }

   set right(right)
   {
      this._right = right;
   }

   get bottom()
   {
      return this._bottom;
   }

   set bottom(bottom)
   {
      this._bottom = bottom;
   }

   get top()
   {
      return this._top;
   }

   set top(top)
   {
      this._top = top;
   }

   get near()
   {
      return this._near;
   }

   set near(near)
   {
      this._near = near;
   }

   get far()
   {
      return this._far;
   }

   set far(far)
   {
      this._far = far;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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
      gl.viewport(0, 0, this.right, this.top);
   }
}

module.exports = OrthographicCamera;
