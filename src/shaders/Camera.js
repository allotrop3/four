'use strict';

let dependencies = [];

let VERTEX_SHADER = [
   'struct Camera',
   '{',
   '   mat4 projectionMatrix;',
   '   mat4 modelViewMatrix;',
   '   mat3 normalMatrix;',
   '};',
].join('\n');

let FRAGMENT_SHADER = [
   
].join('\n');

module.exports = {
   dependencies: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};