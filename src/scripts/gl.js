'use strict';

let canvas = document.querySelector('canvas');
let gl = canvas.getContext('webgl');

if (!gl)
{
    gl = canvas.getContext('experimental-webgl');
}

module.exports = gl;