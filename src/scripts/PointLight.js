'use strict';

let Light = require('./Light');

const _name = 'point.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 fade', 'vec3 location'];

/**
 * A point light radiates light in all directions from the given location, however
 * has a limited reach.
 * @class PointLight
 * @name Entity.Structure.Light.PointLight
 * @extends Entity.Structure.Light
 * @param {string} [name=point.light] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
 * @param {string} [path=light] - Specifies the shader `struct` path to the uniforms, if required.
 * @param {Array} [uniforms=['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'vec3 fade', 'vec3 location']] - Specifies the uniform
 * variables as is declared in the shader. The names imply the `u_` namespace is used as per the uniform variable naming convention.
 * If a `struct` path is defined, the `u_` namespace is implied on this instead.
 * @param {vec3} ambient - Specifies the ambient component of the light source.
 * @param {vec3} diffuse - Specifies the diffuse component of the light source.
 * @param {vec3} specular - Specifies the specular component of the light source.
 * @param {vec3} specular - Specular component
 * @param {vec3} fade - Specifies the coefficient, linear and quadratic elements of the light source.
 * @param {number} [intensity=1] - Specifies the intensity of the light source.
 * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
 */
class PointLight extends Light
{
   constructor({ name = _name, program, path, uniforms = _uniforms, ambient, diffuse, specular, fade, intensity, location } = {})
   {
      super({ name, program, path, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * The coefficient, linear and quadratic elements of the light source.
       * @var {number} Entity.Structure.Light.PointLight.fade
       */
      this.fade = fade;
   }
}

module.exports = PointLight;