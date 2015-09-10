'use strict';

let dependencies = ['PointLight'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'vec3 SpotLight__main(Light SpotLight__light, Material SpotLight__material, vec4 SpotLight__position, vec3 SpotLight__normal)',
   '{',
   '   SpotLight__normal = normalize(SpotLight__normal);',
   '   vec3 SpotLight__pointToLight = SpotLight__light.location - SpotLight__position.xyz;',
   '   float SpotLight__weight = dot(-normalize(SpotLight__pointToLight), normalize(SpotLight__light.direction));',
   '   float SpotLight__angle = acos(SpotLight__weight);',
   '   float SpotLight__cutoff = radians(clamp(SpotLight__light.cutoff, 0.0, 90.0));',
   '   if (SpotLight__angle < SpotLight__cutoff)',
   '   {',
   '      return PointLight__main(SpotLight__light, SpotLight__material, SpotLight__position, SpotLight__normal) * pow(SpotLight__weight, SpotLight__light.exponent);',
   '   }',
   '   return vec3(0.0);',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
