'use strict';

let gl = require('./gl');
let Texture = require('./Texture');

const _name = 'depth.texture';

class DepthTexture extends Texture
{
   constructor({ name = _name, width, height } = {})
   {
      super({ name });

      this.buffer = gl.createTexture();

      this.width = width;

      this.height = height;

      this.inheritance = ['Entity', 'Texture', 'DepthTexture'];

      this.configure();
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
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

      gl.getExtension('WEBGL_depth_texture');

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);

      this.unbind();
   }
}

module.exports = DepthTexture;
