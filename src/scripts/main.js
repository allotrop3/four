'use strict';

let Framebuffer = require('./Framebuffer');
let Scene = require('./Scene');
let instance = new Framebuffer({
   scene: new Scene()
});

console.log(instance);