'use strict';

let VERTEX_SHADER = [
   'const mat4 shadowMatrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);',
   'varying vec4 v_shadow;',
   'void shadow(Camera camera, vec4 position)',
   '{',
   '   v_shadow = shadowMatrix * camera.projectionMatrix * camera.modelViewMatrix * position;',
   '}'
].join('\n');

let FRAGMENT_SHADER = [
   'uniform sampler2D u_shadowMap;',
   'varying vec4 v_shadow;',
   'float visibility()',
   '{',
   '   vec3 depth = v_shadow.xyz / v_shadow.w;',
   '   float shadow = texture2D(u_shadowMap, depth.xy).r;',
   '   float compare = depth.z;',
   '   float biased = compare * 0.99995;',
   '   if (compare <= 1.0 && shadow < biased)',
   '   {',
   '      return 0.3;',
   '   }',
   '   return 1.0;',
   '}'
].join('\n');

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
