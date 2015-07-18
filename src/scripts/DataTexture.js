'use strict';

var Texture = require('./Texture');
var gl = require('./gl');

class DataTexture extends Texture
{
   constructor(name = 'data.texture', image = [], level, width, height, length, components, format = gl.FLOAT, magnification, minification, S, T)
   {
      super(name, image, level, components, format, magnification, minification, S, T);

      this.width = width;
      this.height = height;

      this.autofill();
      this.configure();
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

   autofill(nixel = -1)
   {
      let image = this.image;
      let count = this.width * this.height * this.length - image.length;
      let nixels = `,${nixel}`.repeat(count).substring(1).split(',').map(parseFloat);

      image.push(nixels);
   }
}

module.exports = DataTexture;