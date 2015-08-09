'use strict';

let $view = canvas();
let gl = context('webgl') || context('experimental-webgl');

function canvas()
{
   let $canvas = document.querySelector('canvas');
   let dpi = window.devicePixelRatio;
   let width = $canvas.width;
   let height = $canvas.height;

   $canvas.setAttribute('width', width * dpi);
   $canvas.setAttribute('height', height * dpi);

   $canvas.style.width = width;
   $canvas.style.height = height;

   return $canvas;
}

function context(name)
{
   return $view.getContext(name);
}

module.exports = gl;