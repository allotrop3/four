#version 100

precision lowp float;

attribute vec3 a_position;
attribute vec3 a_color;
attribute vec2 a_uv;
attribute vec3 a_normal;

uniform mat4 u_projection;
uniform mat4 u_modelView;
uniform mat3 u_normal;

varying vec3 v_position;
varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

void main(void)
{
	vec4 position = vec4(a_position, 1.0);

	gl_Position = u_projection * u_modelView * position;

   v_position = vec3(u_modelView * position);
   v_color = a_color;
   v_uv = a_uv;
   v_normal = normalize(u_normal * a_normal);
}