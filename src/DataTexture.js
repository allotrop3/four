'use strict';

let gl = require('./gl');
let Texture = require('./Texture');

const _name = 'data.texture';
const _image = [];
const _length = 3;
const _components = gl.RGB;
const _format = gl.FLOAT;

class DataTexture extends Texture
{
   constructor({ name = _name, image = _image, lod, width, height, length = _length, components = _components, format = _format, magnification, minification, S, T } = {})
   {
      super({ name, lod, components, format, magnification, minification, S, T });

      this.image = image;

      this.width = width;

      this.height = height;

      this.length = length;

      this.autofill();
      this.configure();
   }

   configure()
   {
      super.configure();

      let components = this.components;
      let image = new Float32Array(this.image);

      gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
      gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

      gl.getExtension('OES_texture_float');

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, image);

      this.unbind();
   }

   autofill()
   {
      let image = this.image;
      let count = this.width * this.height * this.length - image.length;
      let nixels = `,-1`.repeat(count).substring(1).split(',').map(parseFloat);

      this.image = image.concat(nixels);
   }
}

module.exports = DataTexture;