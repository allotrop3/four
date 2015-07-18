'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

class ImageTexture extends Texture
{
   constructor(name = 'image.texture', image, lod, components, format = gl.UNSIGNED_BYTE, magnification, minification, S, T)
   {
      super(name, image, lod, components, format, magnification, minification, S, T);

      this.configure();
   }

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