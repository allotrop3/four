'use strict';

let Light = require('./Light');

const _name = 'directional.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction'];
const _direction = [0, 0, 0];

/**
 * A directional light radiates light in a specific direction.
 * @class DirectionalLight
 * @name Entity.Structure.Light.DirectionalLight
 * @extends Entity.Structure.Light
 * @param {string} [name=directional.light] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
 * @param {string} [path=light] - Specifies the shader `struct` path to the uniforms, if required.
 * @param {Array} [uniforms=['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction']] - Specifies the uniform variables
 * as is declared in the shader. The names imply the `u_` namespace is used as per the uniform variable naming convention. If a `struct` path is defined, the
 * `u_` namespace is implied on this instead.
 * @param {vec3} ambient - Specifies the ambient component of the light source.
 * @param {vec3} diffuse - Specifies the diffuse component of the light source.
 * @param {vec3} specular - Specifies the specular component of the light source.
 * @param {number} [intensity=1] - Specifies the intensity of the light source.
 * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
 * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the light aimed.
 */
class DirectionalLight extends Light
{
   constructor({ name = _name, program, path, uniforms = _uniforms, ambient, diffuse, specular, intensity, location, direction = _direction } = {})
   {
      super({ name, program, path, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * The position at which the light aimed.
       * @var {vec3} [Entity.Structure.Light.DirectionalLight.direction=[0, 0, 0]]
       */
      this.direction = direction;
   }
}

module.exports = DirectionalLight;