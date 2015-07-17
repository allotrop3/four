'use strict';

var Framebuffer = require('./framebuffer');
var ajax = require('./utils/ajax');


ajax('/src/scripts/main.js').then(function(response)
{
   console.log(response);
}).then(function()
{
   console.log(arguments);
});

var instance = new Framebuffer();

instance.destroy();

console.log(instance);