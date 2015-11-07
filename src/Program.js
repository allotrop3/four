'use strict';

import gl from './gl';
import Entity from './Entity';
import VertexShader from './VertexShader';
import FragmentShader from './FragmentShader';

const _name = 'program';

class Program extends Entity
{
   constructor({ name = _name, selector } = {})
   {
      super({ name });

      this.buffer = gl.createProgram();

      this.vertexShader = new VertexShader({ selector: selector });

      this.fragmentShader = new FragmentShader({ selector: selector });

      this.inheritance = ['Entity', 'Program'];

      this.link();
   }

   get buffer()
   {
      return this._buffer;
   }

   set buffer(buffer)
   {
      this._buffer = buffer;
   }

   get vertexShader()
   {
      return this._vertexShader;
   }

   set vertexShader(vertexShader)
   {
      this._vertexShader = vertexShader;
   }

   get fragmentShader()
   {
      return this._fragmentShader;
   }

   set fragmentShader(fragmentShader)
   {
      this._fragmentShader = fragmentShader;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   link()
   {
      let buffer = this.buffer;

      gl.attachShader(buffer, this.vertexShader.buffer);
      gl.attachShader(buffer, this.fragmentShader.buffer);

      gl.linkProgram(buffer);

      this.check();
   }

   bind()
   {
      gl.useProgram(this.buffer);
   }

   check()
   {
      let buffer = this.buffer;
      let status = gl.getProgramParameter(buffer, gl.LINK_STATUS);
      let context = gl.isContextLost();

      if (!status && !context)
      {
         let error = gl.getProgramInfoLog(buffer);

         gl.deleteProgram(buffer);

         throw new Error(error);
      }
   }
}

export default Program;