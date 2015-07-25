'use strict';

let gl = require('./gl');

console.log('...testing fourjs...');
console.log('...acquiring rendering context...');
console.log(gl);

console.log('...acquiring Framebuffer dependency...');
let Framebuffer = require('./Framebuffer');
console.log(Framebuffer);

console.log('...acquiring PerspectiveScene dependency...');
let PerspectiveScene = require('./PerspectiveScene');
console.log(PerspectiveScene);

console.log('...instantiating Framebuffer instance with PerspectiveScene...');
let framebuffer = new Framebuffer({
   scene: new PerspectiveScene({ near: 1 })
});
console.log(framebuffer);