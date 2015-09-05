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
   'float depthStep(vec4 depth, float compare)',
   '{',
   '   float shadow = texture2D(u_shadowMap, depth.xy).r;',
   '   float hidden = float(shadow > depth.z * 0.9999);',
   '   return max(hidden, compare);',
   '}',
   'float PCF(vec4 depth, float compare)',
   '{',
   '   float result = 0.0;',
   '   for (float x = -0.5; x <= 0.5; x+=0.5)',
   '   {',
   '      for (float y = -0.5; y <= 0.5; y+=0.5)',
   '      {',
   '         vec4 nearest = depth + vec4(x, y, 0.0, 0.0) / depth.w;',
   '         result += depthStep(nearest, compare);',
   '      }',
   '   }',
   '   return result / 25.0;',
   '}',
   'float visibility(float compare)',
   '{',
   '   vec4 depth = vec4(v_shadow.xyz / v_shadow.w, v_shadow.w);',
   '   return PCF(depth, compare);',
   '}'
].join('\n');

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
