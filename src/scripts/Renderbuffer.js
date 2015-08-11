'use strict';

let gl = require('./gl');
let Entity = require('./Entity');

const _name = 'renderbuffer';

/**
 * A renderbuffer is a data storage object containing a single image of a renderable internal format.
 * @class Renderbuffer
 * @name Entity.Renderbuffer
 * @extends Entity
 * @param {string} [name=renderbuffer] - Specifies the entities friendly name.
 * @param {number} width - The width of the renderbuffer.
 * @param {number} height - The height of the renderbuffer.
 */
class Renderbuffer extends Entity
{
   constructor({ name = _name, width, height } = {})
   {
      super({ name });

      /**
       * The renderbuffer object.
       * @var {WebGLRenderbuffer} [Entity.Renderbuffer.buffer=WebGLRenderbuffer]
       */
      this.buffer = gl.createRenderbuffer();

      /**
       * The width of the renderbuffer.
       * @var {number} Entity.Renderbuffer.width
       */
      this.width = width;

       /**
       * The height of the renderbuffer.
       * @var {number} Entity.Renderbuffer.height
       */
      this.height = height;

      this.configure();
   }

   /**
    * Establish the data storage, format and dimensions
    * of the renderbuffer.
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
    * Bind the renderbuffer.
    * @function Entity.Renderbuffer.bind
    * @returns {undefined}
    */
   bind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
   }

   /**
    * Unbind the renderbuffer.
    * @function Entity.Renderbuffer.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
   }
}

module.exports = Renderbuffer;
