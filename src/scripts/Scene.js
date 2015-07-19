'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let mat3 = glm.mat3;
let axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };

/**
 * Scene
 * @class Scene
 * @name Entity.Scene
 * @extends Entity
 * @param {string} [name=scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 */
class Scene extends Entity
{
   constructor(name = 'scene', background = [0, 0, 0, 1])
   {
      super(name);

      /**
       * Scene background color
       * @var {number} Entity.Scene.background
       * @default [0, 0, 0, 1]
       * @private
       */
      this.background = background;

      /**
       * Modelview matrix
       * @var {number} Entity.Scene.modelViewMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.modelViewMatrix = mat4.create();

      /**
       * Projection matrix
       * @var {number} Entity.Scene.projectionMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.projectionMatrix = mat4.create();

      /**
       * Normal matrix
       * @var {number} Entity.Scene.normalMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.normalMatrix = mat3.create();

      /**
       * View transformation stack
       * @var {number} Entity.Scene.stack
       * @default []
       * @private
       */
      this.stack = [];
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
      let modelViewMatrix = this.modelViewMatrix;

      mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, axis[pivot]);
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
