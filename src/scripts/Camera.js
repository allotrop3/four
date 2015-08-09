'use strict';

let Structure = require('./Structure');
let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let mat3 = glm.mat3;

const axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
const radians = 0.0174532925;

const _name = 'camera';
const _uniforms = ['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix'];
const _background = [0, 0, 0, 1];

/**
 * Camera encapsulates functionality to transform the view,
 * including scaling, rotating and translating, and configure
 * projections into framebuffers
 * @class Camera
 * @name Entity.Camera
 * @extends Entity
 * @param {string} [name=Camera] - Instance name
 * @param {vec4} [background=[0, 0, 0, 1]] - Camera background color
 */
class Camera extends Structure
{
   constructor({ name = _name, program, uniforms = _uniforms, background = _background } = {})
   {
      super({ name, program, path: 'camera', uniforms });

      /**
       * Camera background color
       * @var {number} Entity.Camera.background
       * @default [0, 0, 0, 1]
       * @private
       */
      this.background = background;

      /**
       * Modelview matrix
       * @var {number} Entity.Camera.modelViewMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.modelViewMatrix = mat4.create();

      /**
       * Projection matrix
       * @var {number} Entity.Camera.projectionMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.projectionMatrix = mat4.create();

      /**
       * Normal matrix
       * @var {number} Entity.Camera.normalMatrix
       * @default [0, 0, 0, 0, 0, 0, 0, 0, 0]
       * @private
       */
      this.normalMatrix = mat3.create();

      /**
       * View transformation stack
       * @var {number} Entity.Camera.stack
       * @default []
       * @private
       */
      this.stack = [];
   }

   /**
    * Configure the camera
    * @function Entity.Camera.configure
    * @returns {undefined}
    */
   configure()
   {
      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
   }

   /**
    * Bind the camera
    * @function Entity.Camera.configure
    * @param {Entity.Structure} structure - Camera shader uniforms
    * @returns {undefined}
    */
   bind(structure)
   {
      mat3.normalFromMat4(this.normalMatrix, this.modelViewMatrix);

      super.bind();

      gl.clearColor.apply(gl, this.background);
   }

   /**
    * Push the current state of the camera into
    * the view transformation stack
    * @function Entity.Camera.save
    * @returns {undefined}
    */
   save()
   {
      let currentCamera = mat4.clone(this.modelViewMatrix);

      this.stack.push(currentCamera);
   }

   /**
    * Revert the current camera to last
    * state in view transformation stack
    * @function Entity.Camera.restore
    * @returns {undefined}
    */
   restore()
   {
      let stack = this.stack;

      if (stack.length)
      {
         let previousCamera = stack.pop();

         mat4.copy(this.modelViewMatrix, previousCamera);
      }
   }

   /**
    * Scale the camera by a given magnitude
    * @function Entity.Camera.scale
    * @param {number} scaleX - Scale multiplier along the x axis
    * @param {number} scaleY - Scale multiplier along the y axis
    * @param {number} scaleZ - Scale multiplier along the z axis
    * @returns {undefined}
    */
   scale(scaleX, scaleY, scaleZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, arguments);
   }

   /**
    * Scale the camera by a given magnitude
    * along the x axis
    * @function Entity.Camera.scaleX
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleX(scale)
   {
      this.scale(scale, 1, 1);
   }

   /**
    * Scale the camera by a given magnitude
    * along the y axis
    * @function Entity.Camera.scaleX
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleY(scale)
   {
      this.scale(1, scale, 1);
   }

   /**
    * Scale the camera by a given magnitude
    * along the z axis
    * @function Entity.Camera.scaleZ
    * @param {number} scale - Scale multiplier
    * @returns {undefined}
    */
   scaleZ(scale)
   {
      this.scale(1, 1, scale);
   }

   /**
    * Scale the camera by a given magnitude and axis
    * @function Entity.Camera.scale
    * @param {number} rotation - Rotation in degrees
    * @param {string} [pivot=y] - Axis to rotate around
    * @returns {undefined}
    */
   rotate(rotation, pivot = 'y')
   {
      let modelViewMatrix = this.modelViewMatrix;
      let radian = rotation * radians;

      mat4.rotate(modelViewMatrix, modelViewMatrix, radian, axis[pivot]);
   }

   /**
    * Rotate the camera by a given magnitude
    * around the x axis
    * @function Entity.Camera.rotateX
    * @param {number} rotation - Rotation in degrees
    * @returns {undefined}
    */
   rotateX(rotation)
   {
      this.rotate(rotation, 'x');
   }

   /**
    * Rotate the camera by a given magnitude
    * around the y axis
    * @function Entity.Camera.rotateX
    * @param {number} rotation - Rotation in degrees
    * @returns {undefined}
    */
   rotateY(rotation)
   {
      this.rotate(rotation, 'y');
   }

   /**
    * Rotate the camera by a given magnitude
    * around the z axis
    * @function Entity.Camera.rotateZ
    * @param {number} rotation - Rotation in degrees
    * @returns {undefined}
    */
   rotateZ(rotation)
   {
      this.rotate(rotation, 'z');
   }

   /**
    * Translate the camera by a given vector
    * @function Entity.Camera.translate
    * @param {number} translateX - Translation along the x axis
    * @param {number} translateY - Translation along the y axis
    * @param {number} translateZ - Translation along the z axis
    * @returns {undefined}
    */
   translate(translateX, translateY, translateZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, arguments);
   }

   /**
    * Translate the camera by a given amount
    * along the x axis
    * @function Entity.Camera.translateX
    * @param {number} translation - Translation along the x axis
    * @returns {undefined}
    */
   translateX(translation)
   {
      this.translate(translation, 0 , 0);
   }

   /**
    * Translate the camera by a given amount
    * along the y axis
    * @function Entity.Camera.translateY
    * @param {number} translation - Translation along the y axis
    * @returns {undefined}
    */
   translateY(translation)
   {
      this.translate(0, translation, 0);
   }

   /**
    * Translate the camera by a given amount
    * along the z axis
    * @function Entity.Camera.translateZ
    * @param {number} translation - Translation along the z axis
    * @returns {undefined}
    */
   translateZ(translation)
   {
      this.translate(0, 0, translation);
   }
}

module.exports = Camera;
