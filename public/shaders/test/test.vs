#version 100

precision highp float;

attribute vec3 a_position;

uniform mat4 u_projection;
uniform mat4 u_modelView;

void main(void)
{
	vec4 position = vec4(a_position, 1.0);

	gl_Position = u_projection * u_modelView * position;
}