'use strict';

let Entity = require('./Entity');
let gl = require('./gl');
let unit = 0;

class Texture extends Entity
{
   constructor(image, level = 0, components = gl.RGB, format = gl.UNSIGNED_BYTE, magnification = gl.NEAREST, minification = gl.NEAREST, S = gl.CLAMP_TO_EDGE, T = gl.CLAMP_TO_EDGE, name = 'texture')
   {
      super(name);

      this.buffer = gl.createTexture();
      this.image = image;
      this.level = level;
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