'use strict';

let Light = require('./Light');
let Material = require('./Material');

let VERTEX_SHADER = [
   Light.VERTEX_SHADER,
   Material.VERTEX_SHADER
].join('\n');

let FRAGMENT_SHADER = [
   Light.FRAGMENT_SHADER,
   Material.FRAGMENT_SHADER,
   'vec3 light(Light light, Material material, vec4 position, vec3 normal, vec3 base)',
   '{',
   '   vec3 direction = normalize(light.location - position.xyz);',
   '   float weight = max(dot(direction, normal), 0.0);',
   '   vec3 ambient = light.ambient * material.ambient;',
   '   vec3 diffuse = light.intensity * light.diffuse * (material.diffuse + base) * weight;',
   '   vec3 specular = vec3(0.0)',
   '   if (material.type == 1 && weight > 0.0)',
   '   {',
   '      specular = light.specular * material.specular * pow(max(dot(reflect(-direction, normal), normalize(-position.xyz)), 0.0), material.shininess);',
   '   }',
   '   return ambient + diffuse + specular;',
   '}'
].join('\n');

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};