'use strict';

let dependencies = ['PointLight'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'vec3 SpotLight_on(Light light, Material material, vec4 position, vec3 normal)',
   '{',
   '   normal = normalize(normal);',
   '   vec3 pointToLight = light.location - position.xyz;',
   '   float weight = dot(-normalize(pointToLight), normalize(light.direction));',
   '   float angle = acos(weight);',
   '   float cutoff = radians(clamp(light.cutoff, 0.0, 90.0));',
   '   if (angle < cutoff)',
   '   {',
   '      return PointLight_on(light, material, position, normal) * pow(weight, light.exponent);',
   '   }',
   '   return vec3(0.0);',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
