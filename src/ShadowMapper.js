'use strict';

import { gl } from './Context';
import Structure from './Structure';
import DataTexture from './DataTexture';
import DepthTexture from './DepthTexture';
import DepthFramebuffer from './DepthFramebuffer';

const _name = 'shadow.map';
const _uniforms = ['sampler shadowMap'];

class ShadowMapper extends Structure
{
   constructor({ name = _name, path, uniforms = _uniforms, width = gl.canvas.width, height = gl.canvas.height } = {})
   {
      super({ name, path, uniforms });

      this.colorAttachment = new DataTexture({ width, height });

      this.depthAttachment = new DepthTexture({ width, height });

      this.view = new DepthFramebuffer({ colorAttachment: this.colorAttachment, depthAttachment: this.depthAttachment });

      this.shadowMap = this.depthAttachment.unit;

      this.inheritance = ['Entity', 'Structure', 'ShadowMapper'];
   }

   get colorAttachment()
   {
      return this._colorAttachment;
   }

   set colorAttachment(colorAttachment)
   {
      this._colorAttachment = colorAttachment;
   }

   get depthAttachment()
   {
      return this._depthAttachment;
   }

   set depthAttachment(depthAttachment)
   {
      this._depthAttachment = depthAttachment;
   }

   get view()
   {
      return this._view;
   }

   set view(view)
   {
      this._view = view;
   }

   get shadowMap()
   {
      return this._shadowMap;
   }

   set shadowMap(shadowMap)
   {
      this._shadowMap = shadowMap;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
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

export default ShadowMapper;
