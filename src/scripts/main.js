'use strict';

var Framebuffer = require('./framebuffer');
var Ajax = require('./ajax');
var promising = new Ajax('/src/scripts/main.js');

// console.log(promising.then);
promising.then(function(response)
{
   console.log(response);
});

// console.log(new Ajax('/src/scripts/main.js'));

var instance = new Framebuffer();
window.instance = instance;
instance.destroy();

console.log(instance);