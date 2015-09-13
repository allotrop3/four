'use strict';

let dependencies = [];

let VERTEX_SHADER = [
   'const mat4 matrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);',
   'varying vec4 v_shadow;',
   'void ShadowMapper_init(Camera camera, vec4 position)',
   '{',
   '   v_shadow = matrix * camera.projectionMatrix * camera.modelViewMatrix * position;',
   '}'
].join('\n');

let FRAGMENT_SHADER = [
   'uniform sampler2D u_shadowMap;',
   'varying vec4 v_shadow;',
   'float ShadowMapper_cast()',
   '{',
   '   vec3 depth = v_shadow.xyz / v_shadow.w;',
   '   if (depth.x >= 0.0 && depth.x <= 1.0 && depth.y >= 0.0 && depth.y <= 1.0)',
   '   {',
   '      float shadow = texture2D(u_shadowMap, depth.xy).r;',
   '      float biased = depth.z * 0.99995;',
   '      if (shadow <= biased)',
   '      {',
   '          return 0.3;',
   '      }',
   '   }',
   '   return 1.0;',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
