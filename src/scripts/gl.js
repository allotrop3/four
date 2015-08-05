'use strict';

let canvas = document.createElement('canvas');
let gl = canvas.getContext('webgl');

document.body.insertBefore(canvas, document.body.firstChild);

module.exports = gl;