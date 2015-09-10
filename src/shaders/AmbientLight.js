'use strict';

let dependencies = ['Light'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'vec3 AmbientLight__main(Light AmbientLight__light, Material AmbientLight__material, vec4 AmbientLight__position, vec3 AmbientLight__normal, vec3 AmbientLight__base)',
   '{',
   '   AmbientLight__normal = normalize(AmbientLight__normal);',
   '   vec3 AmbientLight__direction = normalize(AmbientLight__light.location - AmbientLight__position.xyz);',
   '   float AmbientLight__weight = max(dot(AmbientLight__direction, AmbientLight__normal), 0.0);',
   '   vec3 AmbientLight__ambient = AmbientLight__light.ambient * AmbientLight__material.ambient;',
   '   vec3 AmbientLight__diffuse = AmbientLight__light.intensity * AmbientLight__light.diffuse * (AmbientLight__material.diffuse + AmbientLight__base) * AmbientLight__weight;',
   '   vec3 AmbientLight__specular = vec3(0.0);',
   '   if (AmbientLight__material.type == 1)',
   '   {',
   '      if (AmbientLight__weight > 0.0)',
   '      {',
   '         vec3 AmbientLight__eye = AmbientLight__normalize(-AmbientLight__position.xyz);',
   '         vec3 AmbientLight__reflection = reflect(-AmbientLight__direction, AmbientLight__normal);',
   '         AmbientLight__specular = AmbientLight__light.specular * AmbientLight__material.specular * pow(max(dot(AmbientLight__reflection, AmbientLight__eye), 0.0), AmbientLight__material.shininess);',
   '      }',
   '   }',
   '   return AmbientLight__ambient + AmbientLight__diffuse + AmbientLight__specular;',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
