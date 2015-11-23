'use strict';

import { gl } from './Context';
import Structure from './Structure';
import DataTexture from './DataTexture';
import DepthTexture from './DepthTexture';
import DepthFramebuffer from './DepthFramebuffer';

class ShadowMapper extends Structure
{
   constructor(
   {
      width,
      height,
      name = 'shadow.mapper',
      path = 'shadowMapper',
      uniforms = ['i antialias', 'sampler shadowMap'],
      antialias = false
   } = {})
   {
      super({ name, path, uniforms });

      this.colorAttachment = new DataTexture({ width, height });

      this.depthAttachment = new DepthTexture({ width, height });

      this.view = new DepthFramebuffer({ colorAttachment: this.colorAttachment, depthAttachment: this.depthAttachment });

      this.shadowMap = this.depthAttachment.unit;

      this.antialias = antialias;

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

   get antialias()
   {
      return this._antialias;
   }

   set antialias(antialias)
   {
      this._antialias = antialias;
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
