'use strict';

let VERTEX_SHADER = ``;

let FRAGMENT_SHADER = `
   vec3 pointLight(Light light, Material material, vec4 position, vec3 normal)
   {
      normal = normalize(normal);
      vec3 pointToLight = light.location - position.xyz;
      vec3 direction = normalize(pointToLight);
      float weight = max(dot(normal, direction), 0.0);
      vec3 ambient = light.ambient * material.ambient;
      vec3 diffuse = light.diffuse * material.diffuse * weight;
      vec3 specular = vec3(0.0);

      if (material.type == 1)
      {
         if (weight > 0.0)
         {
            vec3 eye = normalize(-position.xyz);
            vec3 reflection = reflect(-direction, normal);
            specular = light.specular * material.specular * pow(max(dot(reflection, eye), 0.0), material.shininess);
         }
      }

      float distanceFromLight = length(pointToLight);
      float quadratic = pow(distanceFromLight / light.radius + 1.0, 2.0);
      float attenuation = light.intensity / quadratic;
      return ambient + (specular + diffuse) * attenuation;
   }
`;

module.exports = {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};
