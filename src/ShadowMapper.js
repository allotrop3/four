'use strict';

let gl = require('./gl');
let Structure = require('./Structure');
let DataTexture = require('./DataTexture');
let DepthTexture = require('./DepthTexture');
let DepthFramebuffer = require('./DepthFramebuffer');

const _name = 'shadow.map';
const _uniforms = ['sampler shadowMap'];
const _width = gl.canvas.width;
const _height = gl.canvas.height;

class ShadowMapper extends Structure
{
   constructor({ name = _name, path, uniforms = _uniforms, width = _width, height = _height } = {})
   {
      super({ name, path, uniforms });
      
      this.colorAttachment = new DataTexture({ width: width, height: height });
      this.depthAttachment = new DepthTexture({ width: width, height: height });
      this.view = new DepthFramebuffer({ colorAttachment: this.colorAttachment, depthAttachment: this.depthAttachment });
      this.shadowMap = this.depthAttachment.unit;
      
      this.inheritance = ['Entity', 'Structure', 'ShadowMapper'];
   }
   
   bind(program)
   {
      super.bind(program);
      
      this.depthAttachment.bind();
   }
   
   unbind()
   {
      this.depthAttachment.unbind();
   }
}

module.exports = ShadowMapper;