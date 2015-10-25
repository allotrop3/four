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

      this.gl = gl;

      this.inheritance = ['Entity', 'Canvas'];

      this.prime(selector);
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

   get dpi()
   {
      return this._dpi;
   }

   set dpi(dpi)
   {
      this._dpi = dpi;
   }

   get gl()
   {
      return this._gl;
   }

   set gl(gl)
   {
      this._gl = gl;
   }

   get inheritance()
   {
      return this._inheritance;
   }

   set inheritance(inheritance)
   {
      this._inheritance = inheritance;
   }

   prime(selector)
   {
      let canvas = document.querySelector(selector);
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