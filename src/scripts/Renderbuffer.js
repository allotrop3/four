'use strict';

let Entity = require('./Entity');
let gl = require('./gl');

/**
 * Renderbuffer is a wrapper on WebGLRenderbuffer buffers
 * @class Renderbuffer
 * @name Entity.Renderbuffer
 * @extends Entity
 * @param {string} [name=renderbuffer] - Instance name
 * @param {number} width - Buffer width
 * @param {number} height - Buffer height
 */
class Renderbuffer extends Entity
{
   constructor({ name = 'renderbuffer', width, height } = {})
   {
      super({ name });

      /**
       * WebGL renderbuffer
       * @var {WebGLRenderbuffer} Entity.Renderbuffer.buffer
       * @default WebGLRenderbuffer
       * @private
       */
      this.buffer = gl.createRenderbuffer();

      /**
       * Buffer width
       * @var {number} Entity.Renderbuffer.width
       * @private
       */
      this.width = width;

       /**
       * Buffer height
       * @var {number} Entity.Renderbuffer.height
       * @private
       */
      this.height = height;

      this.configure();
   }

   /**
    * Configure the dimensions of the renderbuffer
    * @function Entity.Renderbuffer.configure
    * @returns {undefined}
    */
   configure()
   {
      this.bind();

      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);

      this.unbind();
   }

   /**
    * Bind the renderbuffer
    * @function Entity.Renderbuffer.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
   }

   /**
    * Unbind the renderbuffer
    * @function Entity.Renderbuffer.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
   }
}

module.exports = Renderbuffer;
