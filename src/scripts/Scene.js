'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let mat3 = glm.mat3;

class Scene extends Entity
{
   constructor(background = [0, 0, 0, 1], name = 'scene')
   {
      super(name);

      this.background = background;
      this.modelViewMatrix = mat4.create();
      this.projectionMatrix = mat4.create();
      this.normalMatrix = mat3.create();
      this.stack = [];
      this.axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
   }

   configure()
   {
      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
   }

   bind()
   {
      gl.clearColor.apply(gl, this.background);
   }

   save()
   {
      let currentScene = mat4.clone(this.modelViewMatrix);

      this.stack.push(currentScene);
   }

   restore()
   {
      let stack = this.stack;

      if (stack.length)
      {
         let previousScene = stack.pop();

         mat4.copy(this.modelViewMatrix, previousScene);
      }
   }

   scale(scale)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, scale);
   }

   rotate(rotation, pivot)
   {
      let axis = this.axis[pivot];
      let modelViewMatrix = this.modelViewMatrix;

      mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, axis);
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

   translate(translation)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, translation);
   }
}

module.exports = Scene;
