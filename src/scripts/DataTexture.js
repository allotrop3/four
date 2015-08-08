'use strict';

let Texture = require('./Texture');
let gl = require('./gl');

/**
 * DataTexture is a wrapper on WebGLTexture buffers
 * to support data textures used in GPGPU techniques
 * @class DataTexture
 * @name Entity.Texture.DataTexture
 * @extends Entity.Texture
 * @param {string} [name=data.texture] - Instance name
 * @param {Array} [image=[]] - Texture data
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
   constructor({ name = 'data.texture', image = [], lod, width, height, length = 3, components = gl.RGB, format = gl.FLOAT, magnification, minification, S, T } = {})
   {
      super({ name, image, lod, components, format, magnification, minification, S, T });

      /**
       * Texture width
       * @var {number} Entity.Texture.DataTexture.width
       * @private
       */
      this.width = width;

      /**
       * Texture height
       * @var {number} Entity.Texture.DataTexture.height
       * @private
       */
      this.height = height;

      /**
       * Number of color components per pixel
       * @var {number} Entity.Texture.DataTexture.length
       * @private
       */
      this.length = length;

      this.autofill();
      this.configure();
   }

   /**
    * Apply appropriate texture parameters
    * and push data into texture buffer
    * @function Entity.Texture.DataTexture.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      let components = this.components;
      let image = new Float32Array(this.image);

      gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

      gl.getExtension('OES_texture_float');

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, image);

      this.unbind();
   }

   /**
    * Push null pixel values at the back of the
    * texture data to fill and validate it
    * @function Entity.Texture.DataTexture.autofill
    * @param {number} [nixel=-1] Null pixel value
    * @returns {undefined}
    */
   autofill(nixel = -1)
   {
      let image = this.image;
      let count = this.width * this.height * this.length - image.length;
      let nixels = `,${nixel}`.repeat(count).substring(1).split(',').map(parseFloat);

      image.push.apply(image, nixels);
   }
}

module.exports = DataTexture;