'use strict';

let Light = require('./Light');

const _name = 'point.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f coefficient', 'f linear', 'f quadratic', 'f intensity', 'vec3 location'];

/**
 * PointLight is a local light source to illuminate an area of the scene
 * @class PointLight
 * @name Entity.Structure.Light.PointLight
 * @extends Entity.Structure.Light
 * @param {string} [name=point.light] - Instance name
 * @param {Entity.Program} program - Uniforms' program
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {vec3} coefficient - Coefficient component
 * @param {vec3} linear - Linear component
 * @param {vec3} quadratic - Quadratic component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */
class PointLight extends Light
{
   constructor({ name = _name, program, uniforms = _uniforms, ambient, diffuse, specular, coefficient, linear, quadratic, intensity, location } = {})
   {
      super({ name, program, uniforms, ambient, diffuse, specular, intensity, location });

      /**
       * Coefficient component
       * @var {vec3} Entity.Structure.Light.PointLight.coefficient
       * @private
       */
      this.coefficient = coefficient;

      /**
       * Linear component
       * @var {vec3} Entity.Structure.Light.PointLight.linear
       * @private
       */
      this.linear = linear;

      /**
       * Quadratic component
       * @var {vec3} Entity.Structure.Light.PointLight.quadratic
       * @private
       */
      this.quadratic = quadratic;
   }
}

module.exports = PointLight;