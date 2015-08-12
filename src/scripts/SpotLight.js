'use strict';

let Light = require('./Light');

const _name = 'spot.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction'];

 /**
 * A spot light defines a directional cone-shaped radiation of light to
 * illuminate a specific area.
 * @class SpotLight
 * @name Entity.Structure.Light.SpotLight
 * @extends Entity.Structure.Light
 * @param {string} [name=spot.light] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
 * @param {string} [path=light] - Specifies the shader `struct` path to the uniforms, if required.
 * @param {Array} [uniforms=['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction']] - Specifies
 * the uniform variables as is declared in the shader. The names imply the `u_` namespace is used as per the uniform variable naming convention. If a `struct` path
 * is defined, the `u_` namespace is implied on this instead.
 * @param {vec3} ambient - Specifies the ambient component of the light source.
 * @param {vec3} diffuse - Specifies the diffuse component of the light source.
 * @param {vec3} specular - Specifies the specular component of the light source.
 * @param {number} exponent - Specifies the fade intensity of the illuminated boundary.
 * @param {number} cutoff - Specifies the illuminated boundary of the light source.
 * @param {number} [intensity=1] - Specifies the intensity of the light source.
 * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
 * @param {vec3} [direction=[0, 0, 0]] - Specifies the position at which the light aimed.
 */
class SpotLight extends Light
{
   constructor({ name = _name, program, path, uniforms = _uniforms, ambient, diffuse, specular, exponent, cutoff, intensity, location,  direction = _direction } = {})
   {
      super({ name, program, path, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * The intensity of the illuminated field boundary.
       * @var {number} Entity.Structure.Light.SpotLight.exponent
       */
      this.exponent = exponent;

      /**
       * The illuminated field of the light source.
       * @var {number} Entity.Structure.Light.SpotLight.cutoff
       */
      this.cutoff = cutoff;

      /**
       * The position at which the light aimed.
       * @var {vec3} [Entity.Structure.Light.SpotLight.direction=[0, 0, 0]]
       */
      this.direction = direction;
   }
}

module.exports = SpotLight;