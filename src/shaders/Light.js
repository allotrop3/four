'use strict';

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
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};