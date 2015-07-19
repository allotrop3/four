'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

/**
 * ImageTexture is a wrapper on WebGLTexture containers
 * to support detailing mesh surfaces
 * @class ImageTexture
 * @name Entity.Texture.ImageTexture
 * @extends Entity.Texture
 * @param {string} [name=image.texture] - Instance name
 * @param {Array} [image=[]] - Initial texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */
class ImageTexture extends Texture
{
   constructor({ name = 'image.texture', image, lod, components, format, magnification, minification, S, T } = {})
   {
      super({ name, image, lod, components, format, magnification, minification, S, T });

      this.configure();
   }

   /**
    * Apply appropriate texture parameters
    * and push data into texture buffer
    * @function Entity.Texture.ImageTexture.configure
    * @returns {undefined}
    */
   configure()
   {
      super.configure();

      let components = this.components;

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, components, this.format, this.image);

      this.unbind();
   }
}

module.exports = ImageTexture;