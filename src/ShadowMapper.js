'use strict';

let gl = require('./gl');
let Structure = require('./Structure');
let DataTexture = require('./DataTexture');
let Renderbuffer = require('./Renderbuffer');
let DeferredFramebuffer = require('./DeferredFramebuffer');

const _name = 'shadow.map';

class ShadowMapper extends Structure
{
   constructor({ name = _name, program, path, uniforms })
   {
      super({ name, program, path, uniforms });

      this.view = undefined;

      this.configure();
   }

   configure()
   {
      let width = gl.canvas.width;
      let height = gl.canvas.height;
      let colorAttachment = new DataTexture({ width: width, height: height });
      let depthAttachment = new Renderbuffer({ width: width, height: height });

      this.view = new DeferredFramebuffer({ colorAttachment: colorAttachment, depthAttachment: depthAttachment });
   }
}

module.exports = ShadowMapper;