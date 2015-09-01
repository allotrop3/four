'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let unit = 0;

const _name = 'texture';
const _lod = 0;
const _components = gl.RGBA;
const _format = gl.UNSIGNED_BYTE;
const _magnification = gl.NEAREST;
const _minification = gl.NEAREST;
const _S = gl.CLAMP_TO_EDGE;
const _T = gl.CLAMP_TO_EDGE;

class Texture extends Entity
{
   constructor({ name = _name, lod = _lod, components = _components, format = _format, magnification = _magnification, minification = _minification, S = _S, T = _T } = {})
   {
      super({ name });

      this.buffer = gl.createTexture();

      this.lod = lod;

      this.components = components;

      this.format = format;

      this.magnification = magnification;

      this.minification = minification;

      this.S = S;

      this.T = T;

      this.unit = unit++;
      
      this.inheritance = ['Entity', 'Texture'];
   }

   configure()
   {
      this.bind();

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magnification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minification);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.S);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.T);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
   }

   bind()
   {
      let active = gl.TEXTURE0 + this.unit;

      gl.activeTexture(active);
      gl.bindTexture(gl.TEXTURE_2D, this.buffer);
   }

   unbind()
   {
      gl.bindTexture(gl.TEXTURE_2D, null);
   }
}

module.exports = Texture;