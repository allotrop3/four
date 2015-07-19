'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

/**
 * DataTexture is a wrapper on WebGLTexture containers
 * to support data textures used in GPGPU techniques
 * @class DataTexture
 * @name DataTexture
 * @extends Texture
 * @param {string} [name=data.texture] - Instance name
 * @param {Array} [image=[]] - Initial texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} width - Texture width
 * @param {number} height - Texture height
 * @param {number} [length=3] - Number of components
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.FLOAT] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */
class DataTexture extends Texture
{
   constructor({ name = 'data.texture', image = [], lod, width, height, length = 3, components, format = gl.FLOAT, magnification, minification, S, T } = {})
   {
      super({ name, image, lod, components, format, magnification, minification, S, T });

      /**
       * Texture width
       * @var {number} DataTexture.width
       * @private
       */
      this.width = width;

      /**
       * Texture height
       * @var {number} DataTexture.height
       * @private
       */
      this.height = height;

      this.autofill();
      this.configure();
   }

   /**
    * Apply appropriate texture parameters
    * and push data into texture buffer
    * @function DataTexture.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      let components = this.components;

      gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, this.image);

      this.unbind();
   }

   /**
    * Push null pixel values at the back of the
    * texture data to fill and validate it
    * @function DataTexture.autofill
    * @param {number} [nixel=-1] Null pixel value
    * @returns {undefined}
    */
   autofill(nixel = -1)
   {
      let image = this.image;
      let count = this.width * this.height * this.length - image.length;
      let nixels = `,${nixel}`.repeat(count).substring(1).split(',').map(parseFloat);

      image.push(nixels);
   }
}

module.exports = DataTexture;