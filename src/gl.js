'use strict';

let $view = canvas();
let gl = context('webgl') || context('experimental-webgl');

function canvas()
{
   let $canvas = document.querySelector('canvas');
   let dpi = window.devicePixelRatio;
   let width = parseFloat($canvas.getAttribute('width')) || window.innerWidth;
   let height = parseFloat($canvas.getAttribute('height')) || window.innerHeight;

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

export default gl;