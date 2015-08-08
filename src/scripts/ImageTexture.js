'use strict';

let Texture = require('./Texture');
let gl = require('./gl');

/**
 * ImageTexture is a wrapper on WebGLTexture buffers
 * to support detailing mesh surfaces
 * @class ImageTexture
 * @name Entity.Texture.ImageTexture
 * @extends Entity.Texture
 * @param {string} [name=image.texture] - Instance name
 * @param {Array} [image=[]] - Texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGBA] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 * @param {boolean|number} [anisotropy=false] - Level of anisotropic filtering
 */
class ImageTexture extends Texture
{
   constructor({ name = 'image.texture', image, lod, components, format, magnification, minification, S, T, anisotropy = false } = {})
   {
      super({ name, image, lod, components, format, magnification, minification, S, T });

      /**
       * Anisotropic filter handle
       * @var {function} Entity.Texture.ImageTexture.anisotropicFilter
       * @default false
       * @private
       */
      this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic');

      /**
       * Level of anisotropic filtering to
       * improve rendering quality of textures
       * @var {boolean|number} Entity.Texture.ImageTexture.anisotropy
       * @default false
       * @private
       */
      this.anisotropy = this.checkAnisotropy(anisotropy);

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
      let anisotropy = this.anisotropy;

      if (anisotropy)
      {
         gl.texParameterf(gl.TEXTURE_2D, this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT, anisotropy);
      }

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, components, this.format, this.image);

      this.unbind();
   }

   /**
    * Check there is anisotropy support and a supported
    * option is used
    * @function Entity.Texture.ImageTexture.checkAnisotropy
    * @param {boolean|number} anisotropy - Level of anisotropic filtering
    * @returns {number|boolean}
    */
   checkAnisotropy(anisotropy)
   {
      let anisotropicFilter = this.anisotropicFilter;

      if (anisotropicFilter && anisotropy !== false)
      {
         let maxAnisotropy = gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

         return Math.min(anisotropy, Math.max(anisotropy, maxAnisotropy));
      }

      return false;
   }
}

module.exports = ImageTexture;