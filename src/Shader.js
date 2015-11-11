'use strict';

import { gl } from './Context';
import Entity from './Entity';
import shaders from './shaders/shaders';

const _name = 'shader';

class Shader extends Entity
{
   constructor({ name = _name, selector } = {}, type)
   {
      super({ name });

      this.buffer = gl.createShader(gl[type]);

      this.inheritance = ['Entity', 'Shader'];

      this.compile(type, selector);
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   generate(type, selector)
   {
      let source = document.querySelector(selector).textContent;

      for (let tag in shaders)
      {
         source = source.replace(`@use ${tag};`, shaders[tag][type]);
      }

      return source;
   }

   compile(type, selector)
   {
      let buffer = this.buffer;
      let source = this.generate(type, selector);

      gl.shaderSource(buffer, source);
      gl.compileShader(buffer);

      this.check();
   }

   check()
   {
      let buffer = this.buffer;
      let status = gl.getShaderParameter(buffer, gl.COMPILE_STATUS);
      let context = gl.isContextLost();

      if (!status && !context)
      {
         let error = gl.getShaderInfoLog(buffer);

         gl.deleteShader(buffer);

         throw new Error(error);
      }
   }
}

export default Shader;
