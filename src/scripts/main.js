'use strict';

var ajax = require('./utils/ajax');

ajax('/src/scripts/Framebuffer.js').then(function(response)
{
   console.log(response);
});