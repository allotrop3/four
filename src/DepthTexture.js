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

      this.configure();
   }

   configure()
   {
      super.configure();

      gl.getExtension('WEBGL_depth_texture');

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

      this.unbind();
   }
}

module.exports = DepthTexture;