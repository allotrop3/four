'use strict';

let Entity = require('./Entity');

const _name = 'canvas';
const _selector = 'canvas';
const _width = window.innerWidth;
const _height = window.innerHeight;
const _dpi = window.devicePixelRatio;

class Canvas extends Entity
{
   constructor({ name = _name, selector = _selector, width = _width, height = _height, dpi = _dpi } = {})
   {
      super({ name });

      this.canvas = undefined;

      this.width = width;

      this.height = height;

      this.dpi = dpi;

      this.gl = undefined;

      this.inheritance = ['Entity', 'Canvas'];

      this.prime();
      this.contextualise();
   }

   get canvas()
   {
      return this._canvas;
   }

   set canvas(canvas)
   {
      this._canvas = canvas;
   }

   get context()
   {
      return this._context;
   }

   set context(context)
   {
      this._context = context;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   prime()
   {
      let canvas = document.querySelector(this.selector);
      let width = this.width;
      let height = this.height;
      let dpi = this.dpi;

      canvas.setAttribute('width', width * dpi);
      canvas.setAttribute('height', height * dpi);

      canvas.style.width = width;
      canvas.style.height = height;

      this.canvas = canvas;
   }

   contextualise()
   {
      let canvas = this.canvas;
      let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      this.gl = gl;
   }
}



module.exports = Canvas;