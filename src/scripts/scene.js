'use strict';

var Entity = require('./Entity');
var glm = require('gl-matrix');
var mat4 = glm.mat4;
var mat3 = glm.mat3;

class Scene extends Entity
{
   constructor(name, backgroundColor = [0, 0, 0, 1])
   {
      super(name);

      this.backgroundColor = backgroundColor;
      this.modelViewMatrix = mat4.create();
      this.projectionMatrix = mat4.create();
      this.normalMatrix = mat3.create();
      this.stack = [];
   }

   configure()
   {

   }

   bind()
   {

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
}

module.exports = Scene;