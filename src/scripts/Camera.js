'use strict';

let gl = require('./gl');
let glm = require('gl-matrix');
let mat4 = glm.mat4;
let mat3 = glm.mat3;
let Structure = require('./Structure');

const axis = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };
const radians = 0.0174532925;

const _name = 'camera';
const _path = 'camera';
const _uniforms = ['mat4 projectionMatrix', 'mat4 modelViewMatrix', 'mat3 normalMatrix'];
const _background = [0, 0, 0, 1];

/**
 * A camera simplifies transforming the perspective of the view, including scaling, rotating and translating,
 * thereby configuring projections into framebuffers or output display.
 * @class Camera
 * @name Entity.Camera
 * @extends Entity
 * @param {string} [name=camera] - Specifies the entities friendly name.
 * @param {string} program - Specifies the program in which the camera used.
 * @param {string} path - Specifies the uniform structure path to the generic uniforms.
 * @param {Array} uniforms - Specifies the formats and names of the generic uniforms as used in the shader.
 * @param {vec4} [background=[0, 0, 0, 1]] - Specifies the clear value for the color buffers.
 */
class Camera extends Structure
{
   constructor({ name = _name, program, path = _path, uniforms = _uniforms, background = _background } = {})
   {
      super({ name, program, path, uniforms });

      /**
       * The clear value for the color buffers.
       * @var {number} [Entity.Camera.background=[0, 0, 0, 1]]
       */
      this.background = background;

      /**
       * The modelview matrix contains modeling and viewing transformations,
       * which transform object space coordinates into eye space coordinates.
       * @var {number} [Entity.Camera.modelViewMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
       */
      this.modelViewMatrix = mat4.create();

      /**
       * The projection matrix contains the transformation calls it needs
       * to transform eye space coordinates into clip coordinates.
       * @var {number} [Entity.Camera.projectionMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
       */
      this.projectionMatrix = mat4.create();

      /**
       * The normal matrix is the transpose of the modelview matrix. It is
       * used to orient vertex normals correctly based on the on the
       * transformation of its governing mesh.
       * @var {number} [Entity.Camera.normalMatrix=[0, 0, 0, 0, 0, 0, 0, 0, 0]]
       */
      this.normalMatrix = mat3.create();

      /**
       * The view transformation stack retains saved modelview states.
       * @var {Array} [Entity.Camera.stack=[]]
       */
      this.stack = [];
   }

   /**
    * Enable back-face culling and set counter clock-wise front face winding order.
    * @function Entity.Camera.configure
    * @returns {undefined}
    */
   configure()
   {
      gl.enable(gl.CULL_FACE);
      gl.frontFace(gl.CCW);
      gl.clearColor.apply(gl, this.background);
   }

   /**
    * Specify the value of the uniform variables for the current program object.
    * @function Entity.Camera.configure
    * @returns {undefined}
    */
   bind()
   {
      mat3.normalFromMat4(this.normalMatrix, this.modelViewMatrix);

      super.bind();
   }

   /**
    * Save the current state of the camera into the view transformation stack.
    * @function Entity.Camera.save
    * @returns {undefined}
    */
   save()
   {
      let currentCamera = mat4.clone(this.modelViewMatrix);

      this.stack.push(currentCamera);
   }

   /**
    * Revert the current view state to the previously saved state in view
    * transformation stack.
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
    * Zoom the camera by a given multiplier.
    * @function Entity.Camera.scale
    * @param {number} scaleX - Scale multiplier along the x axis.
    * @param {number} scaleY - Scale multiplier along the y axis.
    * @param {number} scaleZ - Scale multiplier along the z axis.
    * @returns {undefined}
    */
   scale(scaleX, scaleY, scaleZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.scale(modelViewMatrix, modelViewMatrix, arguments);
   }

   /**
    * Zoom the camera by a given multiplier along the x axis.
    * @function Entity.Camera.scaleX
    * @param {number} scale - Scale multiplier along the x axis.
    * @returns {undefined}
    */
   scaleX(scale)
   {
      this.scale(scale, 1, 1);
   }

   /**
    * Zoom the camera by a given multiplier along the y axis.
    * @function Entity.Camera.scaleY
    * @param {number} scale - Scale multiplier along the y axis.
    * @returns {undefined}
    */
   scaleY(scale)
   {
      this.scale(1, scale, 1);
   }

   /**
    * Zoom the camera by a given multiplier along the z axis.
    * @function Entity.Camera.scaleZ
    * @param {number} scale - Scale multiplier along the z axis.
    * @returns {undefined}
    */
   scaleZ(scale)
   {
      this.scale(1, 1, scale);
   }

   /**
    * Rotate the camera by a given amount around the given axis. The amount
    * should be provided in degrees.
    * @function Entity.Camera.rotate
    * @param {number} rotation - Rotation in degrees around the given pivot.
    * The inital value is the y axis.
    * @param {string} [pivot=y] - Axis around which to rotate the view.
    * @returns {undefined}
    */
   rotate(rotation, pivot = 'y')
   {
      let modelViewMatrix = this.modelViewMatrix;
      let radian = rotation * radians;

      mat4.rotate(modelViewMatrix, modelViewMatrix, radian, axis[pivot]);
   }

   /**
    * Rotate the camera by a given amount around the x axis. The amount
    * should be provided in degrees.
    * @function Entity.Camera.rotateX
    * @param {number} rotation - Rotation in degrees around the x axis.
    * @returns {undefined}
    */
   rotateX(rotation)
   {
      this.rotate(rotation, 'x');
   }

   /**
    * Rotate the camera by a given amount around the y axis. The amount
    * should be provided in degrees.
    * @function Entity.Camera.rotateY
    * @param {number} rotation - Rotation in degrees around the y axis.
    * @returns {undefined}
    */
   rotateY(rotation)
   {
      this.rotate(rotation, 'y');
   }

   /**
    * Rotate the camera by a given amount around the z axis. The amount
    * should be provided in degrees.
    * @function Entity.Camera.rotateZ
    * @param {number} rotation - Rotation in degrees around the z axis.
    * @returns {undefined}
    */
   rotateZ(rotation)
   {
      this.rotate(rotation, 'z');
   }

   /**
    * Translate the camera by the given vector.
    * @function Entity.Camera.translate
    * @param {number} translateX - Translation along the x axis.
    * @param {number} translateY - Translation along the y axis.
    * @param {number} translateZ - Translation along the z axis.
    * @returns {undefined}
    */
   translate(translateX, translateY, translateZ)
   {
      let modelViewMatrix = this.modelViewMatrix;

      mat4.translate(modelViewMatrix, modelViewMatrix, arguments);
   }

   /**
    * Translate the camera by the given number of units along
    * the x axis.
    * @function Entity.Camera.translateX
    * @param {number} translation - Translation along the x axis.
    * @returns {undefined}
    */
   translateX(translation)
   {
      this.translate(translation, 0 , 0);
   }

   /**
    * Translate the camera by the given number of units along
    * the y axis.
    * @function Entity.Camera.translateY
    * @param {number} translation - Translation along the y axis.
    * @returns {undefined}
    */
   translateY(translation)
   {
      this.translate(0, translation, 0);
   }

   /**
    * Translate the camera by the given number of units along
    * the z axis.
    * @function Entity.Camera.translateZ
    * @param {number} translation - Translation along the z axis.
    * @returns {undefined}
    */
   translateZ(translation)
   {
      this.translate(0, 0, translation);
   }
}

module.exports = Camera;
