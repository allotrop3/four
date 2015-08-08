#version 100

precision lowp float;

uniform vec3 u_color;

varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

void main(void)
{
	gl_FragColor = vec4(u_color, 1.0);
}