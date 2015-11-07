'use strict';

import gl from './gl';
import Texture from './Texture';

const _name = 'data.texture';
const _image = null;
const _length = 4;

class DataTexture extends Texture
{
   constructor({ name = _name, image = _image, lod, width, height, length = _length, components, format, magnification, minification, S, T } = {})
   {
      super({ name, lod, components, format, magnification, minification, S, T });

      this.image = image;

      this.width = width;

      this.height = height;

      this.length = length;

      this.inheritance = ['Entity', 'Texture', 'DataTexture'];

      this.autofill();
      this.configure();
   }

   get image()
   {
      return this._image;
   }

   set image(image)
   {
      this._image = image;
   }

   get width()
   {
      return this._width;
   }

   set width(width)
   {
      this._width = width;
   }

   get height()
   {
      return this._height;
   }

   set height(height)
   {
      this._height = height;
   }

   get length()
   {
      return this._length;
   }

   set length(length)
   {
      this._length = length;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   configure()
   {
      super.configure();

      let components = this.components;
      let image = this.image;

      if (image instanceof Array)
      {
         gl.pixelStorei(gl.PACK_ALIGNMENT, 1);
         gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

         gl.getExtension('OES_texture_float');

         image = new Float32Array(image);
      }

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, this.width, this.height, 0, components, this.format, image);

      this.unbind();
   }

   autofill()
   {
      let image = this.image;

      if (image instanceof Array)
      {
         let count = this.width * this.height * this.length - image.length;
         let nixels = Array.from(new Array(count), () => -1);

         this.image = image.concat(nixels);
      }
   }
}

export default DataTexture;