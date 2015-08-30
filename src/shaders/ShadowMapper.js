'use strict';

let dependencies = ['Camera'];

let VERTEX_SHADER = [
   'const mat4 shadowMatrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);',
   'varying vec4 v_shadow;',
   'void initShadow(Camera camera, vec4 position)',
   '{',
   '   v_shadow = shadowMatrix * camera.projectionMatrix * camera.modelViewMatrix * position;',
   '}'
].join('\n');

let FRAGMENT_SHADER = [
   'uniform sampler2D u_shadowMap;',
   'varying vec4 v_shadow;',
   'float shadow()',
   '{',
   '   vec3 depth = v_shadow.xyz / v_shadow.w;',
   '   float shadow = texture2D(u_shadowMap, depth.xy).r;',
   '   float hidden = float(shadow >= depth.z * 0.9999);',
   '   return max(hidden, 0.25);',
   '}'
].join('\n');

module.exports = {
   dependencies: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};