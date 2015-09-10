'use strict';

let dependencies = ['Light'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'vec3 PointLight__main(Light PointLight__light, Material PointLight__material, vec4 PointLight__position, vec3 PointLight__normal)',
   '{',
   '   PointLight__normal = normalize(PointLight__normal);',
   '   vec3 PointLight__pointToLight = PointLight__light.location - PointLight__position.xyz;',
   '   vec3 PointLight__direction = normalize(PointLight__pointToLight);',
   '   float PointLight__weight = max(dot(PointLight__normal, PointLight__direction), 0.0);',
   '   vec3 PointLight__ambient = PointLight__light.ambient * PointLight__material.ambient;',
   '   vec3 PointLight__diffuse = PointLight__light.diffuse * PointLight__material.diffuse * PointLight__weight;',
   '   vec3 PointLight__specular = vec3(0.0);',
   '   if (PointLight__material.type == 1)',
   '   {',
   '      if (PointLight__weight > 0.0)',
   '      {',
   '         vec3 PointLight__eye = normalize(-PointLight__position.xyz);',
   '         vec3 PointLight__reflection = reflect(-PointLight__direction, PointLight__normal);',
   '         PointLight__specular = PointLight__light.specular * PointLight__material.specular * pow(max(dot(PointLight__reflection, eye), 0.0), PointLight__material.shininess);',
   '      }',
   '   }',
   '   float PointLight__distanceFromLight = length(PointLight__pointToLight);',
   '   float PointLight__quadratic = pow(PointLight__distanceFromLight / PointLight__light.radius + 1.0, 2.0);',
   '   float PointLight__attenuation = PointLight__light.intensity / PointLight__quadratic;',
   '   return PointLight__ambient + (PointLight__specular + PointLight__diffuse) * PointLight__attenuation;',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
