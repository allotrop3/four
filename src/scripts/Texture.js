'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let unit = 0;

/**
 * Texture is a wrapper on WebGLTexture buffers
 * @abstract
 * @class Texture
 * @name Entity.Texture
 * @extends Entity
 * @param {string} [name=attribute] - Name of the Texture instance
 * @param {Array} image - Texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGBA] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */
class Texture extends Entity
{
   constructor({ name = 'texture', image, lod = 0, components = gl.RGBA, format = gl.UNSIGNED_BYTE, magnification = gl.NEAREST, minification = gl.NEAREST, S = gl.CLAMP_TO_EDGE, T = gl.CLAMP_TO_EDGE } = {})
   {
      super({ name });

      /**
       * WebGL texture buffer
       * @var {WebGLTexture} Entity.Texture.buffer
       * @default WebGLTexture
       * @private
       */
      this.buffer = gl.createTexture();

      /**
       * Texture data
       * @var {Array} Entity.Texture.image
       * @private
       */
      this.image = image;

      /**
       * Level of detail
       * @var {number} Entity.Texture.lod
       * @default 0
       * @private
       */
      this.lod = lod;

      /**
       * Texture components per texel
       * @var {number} Entity.Texture.components
       * @default gl.RGB
       * @private
       */
      this.components = components;

      /**
       * Component data format
       * @var {number} Entity.Texture.format
       * @default gl.UNSIGNED_BYTE
       * @private
       */
      this.format = format;

      /**
       * Magnification sampling filter
       * @var {number} Entity.Texture.magnification
       * @default gl.NEAREST
       * @private
       */
      this.magnification = magnification;

      /**
       * Minification sampling filter
       * @var {number} Entity.Texture.minification
       * @default gl.NEAREST
       * @private
       */
      this.minification = minification;

      /**
       * Horizontal texture wrapping
       * @var {number} Entity.Texture.S
       * @default gl.CLAMP_TO_EDGE
       * @private
       */
      this.S = S;

      /**
       * Vertex texture wrapping
       * @var {number} Entity.Texture.T
       * @default gl.CLAMP_TO_EDGE
       * @private
       */
      this.T = T;

      /**
       * Texture unit
       * @var {number} Entity.Texture.unit
       * @default *
       * @private
       */
      this.unit = unit++;
   }

   /**
    * Apply appropriate texture parameters
    * @function Entity.Texture.configure
    * @returns {undefined}
    */
   configure()
   {
      this.bind();

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magnification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.S);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.T);
   }

   /**
    * Bind the texture
    * @function Entity.Texture.bind
    * @param {boolean|Entity.Uniform} [sampler=false] - Texture sampler uniform
    * @returns {undefined}
    */
   bind(sampler = false)
   {
      let unit = this.unit;
      let active = gl.TEXTURE0 + unit;

      gl.activeTexture(active);
      gl.bindTexture(gl.TEXTURE_2D, this.buffer);

      if (sampler)
      {
         sampler.set(unit);
      }
   }

   /**
    * Unbind the texture
    * @function Entity.Texture.unbind
    * @returns {undefined}
    */
   unbind()
   {
      gl.bindTexture(gl.TEXTURE_2D, null);
   }
}

module.exports = Texture;