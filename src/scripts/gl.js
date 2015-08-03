'use strict';

let canvas = document.querySelector('canvas');
let gl = canvas.getContext('webgl');

function handleLostContext(event)
{
	console.log(event);
}

canvas.addEventListener('webglcontextlost', handleLostContext, false);

module.exports = gl;