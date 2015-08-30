'use strict';

let dependencies = [];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'struct Light',
   '{',
   '   vec3 ambient;',
   '   vec3 diffuse;',
   '   vec3 specular;',
   '   float intensity;',
   '   vec3 location;',
   '   int type;',
   '};'
].join('\n');

module.exports = {
   dependencies: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};