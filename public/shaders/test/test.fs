#version 100

precision lowp float;

uniform vec3 u_color;
uniform vec3 u_materialAmbient;
uniform vec3 u_materialDiffuse;
uniform vec3 u_materialSpecular;
uniform float u_materialShininess;
uniform vec3 u_lightAmbient;
uniform vec3 u_lightDiffuse;
uniform vec3 u_lightSpecular;
uniform vec3 u_lightLocation;

varying vec3 v_position;
varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

vec3 illuminate()
{
   vec3 tnorm = normalize(v_normal);
   vec3 s = normalize(u_lightLocation - v_position);
   vec3 v = normalize(-v_position);
   vec3 r = reflect(-s, tnorm);
   vec3 ambient = u_lightAmbient * u_materialAmbient;
   float sdotn = max(dot(s, tnorm), 0.0);
   vec3 diffuse = u_lightDiffuse * u_materialDiffuse * sdotn;
   vec3 specular = vec3(0.0);

   if (sdotn > 0.0)
   {
      specular = u_lightSpecular * u_materialSpecular;
      specular = specular * pow(max(dot(r, v), 0.0), u_materialShininess);
   }

   return ambient + diffuse + specular;
}

void main(void)
{
   gl_FragColor = vec4(illuminate(), 1.0);
}