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
      let modelViewMatrix = this.modelViewMatrix;
      let currentScene = mat4.clone(modelViewMatrix);

      this.stack.push(currentScene);
   }

   restore()
   {
      let stack = this.stack;

      if (stack.length)
      {
         let modelViewMatrix = this.modelViewMatrix;
         let previousScene = stack.pop();

         mat4.copy(modelViewMatrix, previousScene);
      }
   }

   scale(scale)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, scale);
   }

   rotate(rotation, pivot = 'y')
   {
      let axis = this.axis[pivot];
      let modelViewMatrix = this.modelViewMatrix;

      mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, axis);
   }

   translate(translation)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, translation);
   }
}

module.exports = Scene;
