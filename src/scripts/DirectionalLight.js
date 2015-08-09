'use strict';

let Light = require('./Light');

const _name = 'directional.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction'];
const _direction = [0, 0, 0];

/**
 * DirectionalLight is a directional light source to illuminate the scene
 * @class DirectionalLight
 * @name Entity.Structure.Light.DirectionalLight
 * @extends Entity.Structure.Light
 * @param {string} [name=directional.light] - Instance name
 * @param {Entity.Program} program - Uniforms' program
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 * @param {vec3} [direction=[0, 0, 0]] - Light direction
 */
class DirectionalLight extends Light
{
   constructor({ name = _name, program, uniforms = _uniforms, ambient, diffuse, specular, intensity, location, direction = _direction } = {})
   {
      super({ name, program, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * Light direction
       * @var {vec3} Entity.Structure.Light.DirectionalLight.direction
       * @default [0, 0, 0]
       * @private
       */
      this.direction = direction;
   }
}

module.exports = DirectionalLight;