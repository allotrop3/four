#version 100

precision lowp float;

varying vec3 v_color;

void main(void)
{
	gl_FragColor = vec4(v_color, 1.0);
}