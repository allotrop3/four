'use strict';

import { gl } from './Context';
import image from './utils/image';
import Texture from './Texture';

const _name = 'image.texture';
const _anisotropy = false;
const _mipmap = false;

class ImageTexture extends Texture
{
   constructor({ name = _name, path, lod, components, format, magnification, minification, S, T, anisotropy = _anisotropy, mipmap = _mipmap } = {})
   {
      super({ name, lod, components, format, magnification, minification, S, T });

      this.image = undefined;

      this.promise = this.fetch(path);

      this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic');

      this.anisotropy = anisotropy;

      this.mipmap = mipmap;

      this.inheritance = ['Entity', 'Texture', 'ImageTexture'];
   }

   get image()
   {
      return this._image;
   }

   set image(image)
   {
      this._image = image;
   }

   get anisotropicFilter()
   {
      return this._anisotropicFilter;
   }

   set anisotropicFilter(anisotropicFilter)
   {
      this._anisotropicFilter = anisotropicFilter;
   }

   get anisotropy()
   {
      return this._anisotropy;
   }

   set anisotropy(anisotropy)
   {
      let anisotropicFilter = this.anisotropicFilter;

      if (anisotropicFilter && anisotropy !== false)
      {
         let maxAnisotropy = gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

         anisotropy = Math.min(anisotropy, Math.max(anisotropy, maxAnisotropy));
      }
      else
      {
         anisotropy = 0;
      }

      this._anisotropy = anisotropy;
   }

   get mipmap()
   {
      return this._mipmap;
   }

   set mipmap(mipmap)
   {
      this._mipmap = mipmap;
   }

   fetch(path)
   {
      return image(path).then(this.define.bind(this)).then(this.configure.bind(this));
   }

   define(image)
   {
      this.image = image;
   }

   configure()
   {
      super.configure();

      let components = this.components;
      let anisotropy = this.anisotropy;

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      if (anisotropy)
      {
         gl.texParameterf(gl.TEXTURE_2D, this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT, anisotropy);
      }

      gl.texImage2D(gl.TEXTURE_2D, this.lod, components, components, this.format, this.image);

      if (this.mipmap)
      {
         gl.generateMipmap(gl.TEXTURE_2D);
      }

      this.unbind();
   }
}

export default ImageTexture;