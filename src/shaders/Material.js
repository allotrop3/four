'use strict';

let FRAGMENT_SHADER = [
   'struct Material',
   '{',
   '   int image;',
   '   vec3 ambient;',
   '   vec3 diffuse;',
   '   vec3 specular;',
   '   int shading;',   
   '   int type;',
   '};',
   'uniform sampler2D u_image;'
].join('\n');

module.exports = {
   VERTEX_SHADER: '',
   FRAGMENT_SHADER: FRAGMENT_SHADER
};