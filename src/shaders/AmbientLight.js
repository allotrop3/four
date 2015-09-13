'use strict';

let dependencies = ['Light'];

let VERTEX_SHADER = [
].join('\n');

let FRAGMENT_SHADER = [
   'vec3 AmbientLight_on(Light light, Material material, vec4 position, vec3 normal, vec3 base)',
   '{',
   '   normal = normalize(normal);',
   '   vec3 direction = normalize(light.location - position.xyz);',
   '   float weight = max(dot(direction, normal), 0.0);',
   '   vec3 ambient = light.ambient * material.ambient;',
   '   vec3 diffuse = light.intensity * light.diffuse * (material.diffuse + base) * weight;',
   '   vec3 specular = vec3(0.0);',
   '   if (material.type == 1)',
   '   {',
   '      if (weight > 0.0)',
   '      {',
   '         vec3 eye = normalize(-position.xyz);',
   '         vec3 reflection = reflect(-direction, normal);',
   '         specular = light.specular * material.specular * pow(max(dot(reflection, eye), 0.0), material.shininess);',
   '      }',
   '   }',
   '   return ambient + diffuse + specular;',
   '}'
].join('\n');

module.exports = {
   import: dependencies,
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
