'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

class DataTexture extends Texture
{
   constructor(level, width, height, components, magnification, minification, S, T, image = null, format = gl.FLOAT, name = 'data.texture')
   {
      super(image, level, components, format, magnification, minification, S, T, name);

      this.width = width;
      this.height = height;
   }

   configure()
   {
      super.configure();

      let components = this.components;

      gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

      gl.texImage2D(gl.TEXTURE_2D, this.level, components, this.width, this.height, 0, components, this.format, this.image);

      this.unbind();
   }

   fill(nixel = -1)
   {
      console.log(nixel);
   }
}

module.exports = DataTexture;