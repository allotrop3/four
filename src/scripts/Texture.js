'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let unit = 0;

/**
 * Texture is a wrapper on WebGLTexture
 * @abstract
 * @class Texture
 * @extends Entity
 * @param {string} [name=attribute] - Name of the Texture instance
 * @param {Array} image - Initial texture data
 * @param {number} [lod=0] - Level of detail
 * @param {number} [components=gl.RGB] - Texture components per texel
 * @param {number} [format=gl.UNSIGNED_BYTE] - Component data format
 * @param {number} [magnification=gl.NEAREST] - Magnification sampling filter
 * @param {number} [minification=gl.NEAREST] - Minification sampling filter
 * @param {number} [S=gl.CLAMP_TO_EDGE] - Horizontal texture wrapping
 * @param {number} [T=gl.CLAMP_TO_EDGE] - Vertex texture wrapping
 */
class Texture extends Entity
{
   constructor(name = 'texture', image, lod = 0, components = gl.RGB, format = gl.UNSIGNED_BYTE, magnification = gl.NEAREST, minification = gl.NEAREST, S = gl.CLAMP_TO_EDGE, T = gl.CLAMP_TO_EDGE)
   {
      super(name);

      this.buffer = gl.createTexture();
      this.image = image;
      this.lod = lod;
      this.components = components;
      this.format = format;
      this.magnification = magnification;
      this.minification = minification;
      this.S = S;
      this.T = T;
      this.unit = unit++;

      configure();
   }

   configure()
   {
      this.bind();

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magnification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.S);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.T);
   }

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

   unbind()
   {
      gl.bindTexture(gl.TEXTURE_2D, null);
   }
}

module.exports = Texture;