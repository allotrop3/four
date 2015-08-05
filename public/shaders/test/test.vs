#version 100

precision highp float;

attribute vec3 a_position;
attribute vec3 a_color;

uniform mat4 u_projection;
uniform mat4 u_modelView;

varying vec3 v_color;

void main(void)
{
	vec4 position = vec4(a_position, 1.0);

	gl_Position = u_projection * u_modelView * position;

   v_color = a_color;
}