'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let mat3 = glm.mat3;
const axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };

/**
 * Scene encapsulates functionality to transform the view,
 * including scaling, rotating and translating, and configure
 * projections into framebuffers
 * @class Scene
 * @name Entity.Scene
 * @extends Entity
 * @param {string} [name=scene] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Scene background color
 */
class Scene extends Entity
{
   constructor({ name = 'scene', background = [0, 0, 0, 1] } = {})
   {
      super({ name });

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

   /**
    * Configure the scene
    * @function Entity.Scene.configure
    * @returns {undefined}
    */
   configure()
   {
      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
   }

   /**
    * Bind the scene
    * @function Entity.Scene.configure
    * @returns {undefined}
    */
   bind()
   {
      gl.clearColor.apply(gl, this.background);
   }

   /**
    * Push the current state of the scene into
    * the view transformation stack
    * @function Entity.Scene.save
    * @returns {undefined}
    */
   save()
   {
      let currentScene = mat4.clone(this.modelViewMatrix);

      this.stack.push(currentScene);
   }

   /**
    * Revert the current scene to last
    * state in view transformation stack
    * @function Entity.Scene.restore
    * @returns {undefined}
    */
   restore()
   {
      let stack = this.stack;

      if (stack.length)
      {
         let previousScene = stack.pop();

         mat4.copy(this.modelViewMatrix, previousScene);
      }
   }

   /**
    * Scale the scene by a given magnitude
    * @function Entity.Scene.scale
    * @param {vec3} scale - Scale vector multiplier
    * @returns {undefined}
    */
   scale(scale)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, scale);
   }

   /**
    * Scale the scene by a given magnitude
    * along the x axis
    * @function Entity.Scene.scaleX
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleX(scale)
   {
      this.scale([scale, 1, 1]);
   }

   /**
    * Scale the scene by a given magnitude
    * along the y axis
    * @function Entity.Scene.scaleX
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleY(scale)
   {
      this.scale([1, scale, 1]);
   }

   /**
    * Scale the scene by a given magnitude
    * along the z axis
    * @function Entity.Scene.scaleZ
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleZ(scale)
   {
      this.scale([1, 1, scale]);
   }

   /**
    * Scale the scene by a given magnitude and axis
    * @function Entity.Scene.scale
    * @param {number} rotation - Rotation in radians
    * @param {string} pivot - Axis to rotate around
    * @returns {undefined}
    */
   rotate(rotation, pivot)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, axis[pivot]);
   }

   /**
    * Rotate the scene by a given magnitude
    * around the x axis
    * @function Entity.Scene.rotateX
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */
   rotateX(rotation)
   {
      this.rotate(rotation, 'x');
   }

   /**
    * Rotate the scene by a given magnitude
    * around the y axis
    * @function Entity.Scene.rotateX
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */
   rotateY(rotation)
   {
      this.rotate(rotation, 'y');
   }

   /**
    * Rotate the scene by a given magnitude
    * around the z axis
    * @function Entity.Scene.rotateZ
    * @param {number} rotation - Rotation in radians
    * @returns {undefined}
    */
   rotateZ(rotation)
   {
      this.rotate(rotation, 'z');
   }

   /**
    * Translate the scene by a given vector
    * @function Entity.Scene.translate
    * @param {vec3} translation - Translation vector
    * @returns {undefined}
    */
   translate(translation)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, translation);
   }
}

module.exports = Scene;
