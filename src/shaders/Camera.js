'use strict';

let VERTEX_SHADER = [
   'struct camera',
   '{',
   '   mat4 projectionMatrix;',
   '   mat4 modelViewMatrix;',
   '   mat3 normalMatrix;',
   '};',
   'uniform camera u_camera;'
].join('\n');

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: ''
};