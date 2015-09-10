'use strict';

let dependencies = [];

let VERTEX_SHADER = [
   'const mat4 ShadowMapper__matrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);',
   'varying vec4 v_ShadowMapper__shadow;',
   'void ShadowMapper__main(Camera ShadowMapper__camera, vec4 ShadowMapper__position)',
   '{',
   '   v_ShadowMapper__shadow = ShadowMapper__matrix * ShadowMapper__camera.projectionMatrix * ShadowMapper__camera.modelViewMatrix * ShadowMapper__position;',
   '}'
].join('\n');

let FRAGMENT_SHADER = [
   'uniform sampler2D u_ShadowMapper__shadowMap;',
   'varying vec4 v_ShadowMapper__shadow;',
   'float ShadowMapper__main()',
   '{',
   '   vec3 ShadowMapper__depth = v_ShadowMapper__shadow.xyz / v_ShadowMapper__shadow.w;',
   '   if (ShadowMapper__depth.x >= 0.0 && ShadowMapper__depth.x <= 1.0 && ShadowMapper__depth.y >= 0.0 && ShadowMapper__depth.y <= 1.0)',
   '   {',
   '      float ShadowMapper__shadow = texture2D(u_ShadowMapper__shadowMap, ShadowMapper__depth.xy).r;',
   '      float ShadowMapper__biased = ShadowMapper__depth.z * 0.99995;',
   '      if (ShadowMapper__shadow <= ShadowMapper__biased)',
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
