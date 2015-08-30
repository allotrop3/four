'use strict';

let VERTEX_SHADER = [
   'const mat4 shadowMatrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);',
   'uniform camera u_depthCamera',
   'varying vec4 v_shadow;',
   'void initShadow(vec4 position)',
   '{',
   '   v_shadow = shadowMatrix * u_depthCamera.projectionMatrix * u_depthCamera.modelViewMatrix * position;',
   '}'
].join('\n');

let FRAGMENT_SHADER = [
   'uniform sampler2D u_shadowMap',
   'varying vec4 v_shadow',
   'float visibility()',
   '{',
   '   vec3 depth = v_shadow.xyz / v_shadow.w;',
   '   float shadow = texture2D(u_shadowMap, depth.xy).r;',
   '   float visible = float(shadow >= depth.z * 0.9999);',
   '   return max(visible, 0.25);',
   '}'
].join('\n');

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};