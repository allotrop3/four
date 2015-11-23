'use strict';

import { gl } from './Context';
import { mat4 } from 'gl-matrix';
import { mat3 } from 'gl-matrix';
import LSL from './utils/LSL';
import Structure from './Structure';

const axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
const radians = 0.0174532925;

class Camera extends Structure
{
   constructor(
   {
      name = 'camera',
      path = 'camera',
      uniforms = ['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix'],
      background = 0x000000,
      translucence = 1
   } = {})
   {
      super({ name, path, uniforms });

      this.background = background;

      this.translucence = translucence;

      this.modelViewMatrix = mat4.create();

      this.projectionMatrix = mat4.create();

      this.normalMatrix = mat3.create();

      this.stack = [];

      this.inheritance = ['Entity', 'Structure', 'Camera'];
   }

   get background()
   {
      return this._background;
   }

   set background(background)
   {
      this._background = LSL(background);
   }

   get translucence()
   {
      return this._translucence;
   }

   set translucence(translucence)
   {
      this._translucence = translucence;
   }

   get modelViewMatrix()
   {
      return this._modelViewMatrix;
   }

   set modelViewMatrix(modelViewMatrix)
   {
      this._modelViewMatrix = modelViewMatrix;
   }

   get projectionMatrix()
   {
      return this._projectionMatrix;
   }

   set projectionMatrix(projectionMatrix)
   {
      this._projectionMatrix = projectionMatrix;
   }

   get normalMatrix()
   {
      return this._normalMatrix;
   }

   set normalMatrix(normalMatrix)
   {
      this._normalMatrix = normalMatrix;
   }

   get stack()
   {
      return this._stack;
   }

   set stack(stack)
   {
      this._stack = stack;
   }

   configure()
   {
      let background = this.background.concat(this.translucence);

      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
      gl.clearColor.apply(gl, background);
   }

   bind(program)
   {
      mat3.normalFromMat4(this.normalMatrix, this.modelViewMatrix);

      super.bind(program);
   }

   save()
   {
      let currentCamera = mat4.clone(this.modelViewMatrix);

      this.stack.push(currentCamera);
   }

   restore()
   {
      let stack = this.stack;

      if (stack.length)
      {
         let previousCamera = stack.pop();

         mat4.copy(this.modelViewMatrix, previousCamera);
      }
   }

   scale(scaleX, scaleY, scaleZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, arguments);
   }

   scaleX(scale)
   {
      this.scale(scale, 1, 1);
   }

   scaleY(scale)
   {
      this.scale(1, scale, 1);
   }

   scaleZ(scale)
   {
      this.scale(1, 1, scale);
   }

   rotate(rotation, pivot = 'y')
   {
      let modelViewMatrix = this.modelViewMatrix;
      let radian = rotation * radians;

      mat4.rotate(modelViewMatrix, modelViewMatrix, radian, axis[pivot]);
   }

   rotateX(rotation)
   {
      this.rotate(rotation, 'x');
   }

   rotateY(rotation)
   {
      this.rotate(rotation, 'y');
   }

   rotateZ(rotation)
   {
      this.rotate(rotation, 'z');
   }

   translate(translateX, translateY, translateZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, arguments);
   }

   translateX(translation)
   {
      this.translate(translation, 0 , 0);
   }

   translateY(translation)
   {
      this.translate(0, translation, 0);
   }

   translateZ(translation)
   {
      this.translate(0, 0, translation);
   }
}

export default Camera;