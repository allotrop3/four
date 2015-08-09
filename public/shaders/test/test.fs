#version 100

precision lowp float;

struct material
{
   vec3 ambient;
   vec3 diffuse;
   vec3 specular;
   int shading;
   float shininess;
};

// struct light
// {
//    vec3 ambient;
//    vec3 diffuse;
//    vec3 specular;
//    float intensity;
//    vec3 location;
// };

struct light
{
   vec3 ambient;
   vec3 diffuse;
   vec3 specular;
   float coefficient;
   float linear;
   float quadratic;
   float intensity;
   vec3 location;
};


uniform material u_material;
uniform light u_light;

varying vec3 v_position;
varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

vec3 illuminate()
{
   vec3 tnorm = normalize(v_normal);
   vec3 d = u_light.location - v_position;
   vec3 s = normalize(d);
   float l = length(d);
   vec3 v = normalize(-v_position);
   vec3 r = reflect(-s, tnorm);
   vec3 ambient = u_light.ambient * u_material.ambient;
   float sdotn = max(dot(s, tnorm), 0.0);
   vec3 diffuse = u_light.diffuse * u_material.diffuse * sdotn;
   vec3 specular = vec3(0.0);

   if (sdotn > 0.0)
   {
      specular = u_light.specular * u_material.specular;
      specular = specular * pow(max(dot(r, v), 0.0), u_material.shininess);
   }

   return (ambient + diffuse + specular) * (1.0 / (u_light.coefficient + (u_light.linear * l) + (u_light.quadratic * pow(l, 2.0))));
}

void main(void)
{
   gl_FragColor = vec4(illuminate(), 1.0);
}