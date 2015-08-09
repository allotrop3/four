#version 100

precision lowp float;

struct camera
{
   mat4 projectionMatrix;
   mat4 modelViewMatrix;
   mat3 normalMatrix;
};

attribute vec3 a_position;
attribute vec3 a_color;
attribute vec2 a_uv;
attribute vec3 a_normal;

uniform camera u_camera;

varying vec3 v_position;
varying vec3 v_color;
varying vec2 v_uv;
varying vec3 v_normal;

void main(void)
{
	vec4 position = vec4(a_position, 1.0);

	gl_Position = u_camera.projectionMatrix * u_camera.modelViewMatrix * position;

   v_position = vec3(u_camera.modelViewMatrix * position);
   v_color = a_color;
   v_uv = a_uv;
   v_normal = normalize(u_camera.normalMatrix * a_normal);
}