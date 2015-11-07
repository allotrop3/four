'use strict';

let VERTEX_SHADER = ``;

let FRAGMENT_SHADER = `
   struct Light
   {
      vec3 ambient;
      vec3 diffuse;
      vec3 specular;
      float intensity;
      vec3 location;
      int type;
   };

   vec3 Light_main(Light light, Material material, vec4 position, vec3 normal, vec3 base)
   {
      vec3 direction = normalize(light.location - position.xyz);
      float weight = max(dot(direction, normal), 0.0);
      vec3 ambient = light.ambient * material.ambient;
      vec3 diffuse = light.intensity * light.diffuse * (material.diffuse + base) * weight;
      vec3 specular = vec3(0.0);

      if (material.type == 1 && weight > 0.0)
      {
         specular = light.specular * material.specular * pow(max(dot(reflect(-direction, normal), normalize(-position.xyz)), 0.0), material.shininess);
      }

      return ambient + diffuse + specular;
   }
`;

export default {
   VERTEX_SHADER: VERTEX_SHADER,
   FRAGMENT_SHADER: FRAGMENT_SHADER
};