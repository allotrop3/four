'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

class ImageTexture extends Texture
{
   constructor(image, level, components, magnification, minification, S, T, format = gl.UNSIGNED_BYTE, name = 'image.texture')
   {
      super(image, level, components, format, magnification, minification, S, T, name);

      this.configure();
   }

   configure()
   {
      super.configure();

      let components = this.components;

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      gl.texImage2D(gl.TEXTURE_2D, this.level, components, components, this.format, this.image);

      this.unbind();
   }
}

module.exports = ImageTexture;