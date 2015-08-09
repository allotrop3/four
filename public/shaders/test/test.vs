#version 100

precision lowp float;

struct scene
{
   mat4 projectionMatrix;
   mat4 modelViewMatrix;
   mat3 normalMatrix;
};

attribute vec3 a_position;
attribute vec3 a_color;
attribute vec2 a_uv;
attribute vec3 a_normal;

uniform scene u_scene;

varying vec3 v_position;
varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

void main(void)
{
	vec4 position = vec4(a_position, 1.0);

	gl_Position = u_scene.projectionMatrix * u_scene.modelViewMatrix * position;

   v_position = vec3(u_scene.modelViewMatrix * position);
   v_color = a_color;
   v_uv = a_uv;
   v_normal = normalize(u_scene.normalMatrix * a_normal);
}