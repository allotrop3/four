'use strict';

let Light = require('./Light');

const _name = 'spot.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f exponent', 'f cutoff', 'f intensity', 'vec3 location', 'vec3 direction'];

/**
 * SpotLight is a local light source pointing in a particular
 * direction to illuminate an area of the scene
 * @class SpotLight
 * @name Entity.Structure.Light.SpotLight
 * @extends Entity.Structure.Light
 * @param {string} [name=spot.light] - Instance name
 * @param {Entity.Program} program - Uniforms' program
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} exponent - Light fade intensity
 * @param {number} cutoff - Light cutoff
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */
class SpotLight extends Light
{
   constructor({ name = _name, program, uniforms = _uniforms, ambient, diffuse, specular, exponent, cutoff, intensity, location, direction } = {})
   {
      super({ name, program, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * Light fade intensity
       * @var {number} Entity.Structure.Light.SpotLight.exponent
       * @private
       */
      this.exponent = exponent;

      /**
       * Light cutoff
       * @var {number} Entity.Structure.Light.SpotLight.cutoff
       * @private
       */
      this.cutoff = cutoff;

      /**
       * Light direction
       * @var {vec3} Entity.Structure.Light.SpotLight.direction
       * @default [0, 0, 0]
       * @private
       */
      this.direction = direction;
   }
}

module.exports = SpotLight;