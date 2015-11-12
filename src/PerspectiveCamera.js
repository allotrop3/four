'use strict';

import { gl } from './Context';
import { mat4 } from 'gl-matrix';
import Camera from './Camera';

const _name = 'perspective.camera';
const _fov = 45;
const _near = 0.1;
const _far = 1000;
const _direction = [0, 0, 0];
const _location = [10, 10, -10];
const _up = [0, 1, 0];

class PerspectiveCamera extends Camera
{
   constructor({ name = _name, path, uniforms, background, translucence, width = gl.canvas.width, height = gl.canvas.height, fov = _fov, near = _near, far = _far, direction = _direction, location = _location, up = _up } = {})
   {
      super({ name, path, uniforms, background, translucence });

      this.width = width;

      this.height = height;

      this.fov = fov;

      this.ratio = width / height;

      this.near = near;

      this.far = far;

      this.direction = direction;

      this.location = location;

      this.up = up;

      this.inheritance = ['Entity', 'Structure', 'Camera', 'PerspectiveCamera'];

      this.configure();
   }

   get width()
   {
      return this._width;
   }

   set width(width)
   {
      this._width = width;
   }

   get height()
   {
      return this._height;
   }

   set height(height)
   {
      this._height = height;
   }

   get fov()
   {
      return this._fov;
   }

   set fov(fov)
   {
      this._fov = fov;
   }

   get ratio()
   {
      return this._ratio;
   }

   set ratio(ratio)
   {
      this._ratio = ratio;
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

   get direction()
   {
      return this._direction;
   }

   set direction(direction)
   {
      this._direction = direction;
   }

   get location()
   {
      return this._location;
   }

   set location(location)
   {
      this._location = location;
   }

   get up()
   {
      return this._up;
   }

   set up(up)
   {
      this._up = up;
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

export default PerspectiveCamera;