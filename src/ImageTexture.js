'use strict';

let gl = require('./gl');
let Texture = require('./Texture');

const _name = 'image.texture';
const _anisotropy = false;
const _mipmap = false;

class ImageTexture extends Texture
{
   constructor({ name = _name, path, lod, components, format, magnification, minification, S, T, anisotropy = _anisotropy, mipmap = _mipmap } = {})
   {
      super({ name, lod, components, format, magnification, minification, S, T });

      this.image = new Image();

      this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic');

      this.anisotropy = this.checkAnisotropy(anisotropy);

      this.mipmap = mipmap;
      
      this.inheritance = ['Entity', 'Texture', 'ImageTexture'];

      this.fetch(path);
   }

   fetch(path)
   {
      let image = this.image;

      image.src = path;

      image.onload = this.configure.bind(this);
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

   checkAnisotropy(anisotropy)
   {
      let anisotropicFilter = this.anisotropicFilter;

      if (anisotropicFilter && anisotropy !== false)
      {
         let maxAnisotropy = gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

         return Math.min(anisotropy, Math.max(anisotropy, maxAnisotropy));
      }

      return 0;
   }
}

module.exports = ImageTexture;