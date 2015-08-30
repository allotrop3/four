'use strict';

let dependencies = [];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'struct Material',
   '{',
   '   int image;',
   '   vec3 ambient;',
   '   vec3 diffuse;',
   '   vec3 specular;',
   '   float shininess;',
   '   int shading;',   
   '   int type;',
   '};',
   'uniform sampler2D u_image;'
].join('\n');

module.exports = {
   dependencies: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};