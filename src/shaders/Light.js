'use strict';

let dependencies = ['Light'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'struct Light',
   '{',
   '   vec3 ambient;',
   '   vec3 diffuse;',
   '   vec3 specular;',
   '   float radius;',
   '   float exponent;',
   '   float cutoff;',
   '   float intensity;',
   '   vec3 location;',
   '   vec3 direction;',
   '   int type;',
   '};'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
