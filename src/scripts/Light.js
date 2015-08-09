'use strict';

let Structure = require('./Structure');

const _name = 'light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location'];
const _intensity = 1;
const _location = [0, 0, 0];

/**
 * Light is a global light source to illuminate the scene
 * @class Light
 * @name Entity.Structure.Light
 * @extends Entity.Structure
 * @param {string} [name=light] - Instance name
 * @param {Entity.Program} program - Uniforms' program
 * @param {vec3} ambient - Ambient component
 * @param {vec3} diffuse - Diffuse component
 * @param {vec3} specular - Specular component
 * @param {number} [intensity=1] - Light intensity
 * @param {vec3} [location=[0, 0, 0]] - Light position
 */
 class Light extends Structure
 {
    constructor({ name = _name, program, uniforms = _uniforms, ambient, diffuse, specular, intensity = _intensity, location = _location } = {})
    {
       super({ name, program, path: 'light', uniforms });

       /**
        * Ambient component
        * @var {vec3}Entity.Structure.Light.ambient
        * @private
        */
       this.ambient = ambient;

       /**
        * Diffuse component
        * @var {vec3} Entity.Structure.Light.diffuse
        * @private
        */
       this.diffuse = diffuse;

       /**
        * Specular component
        * @var {vec3} Entity.Structure.Light.specular
        * @private
        */
       this.specular = specular;

       /**
        * Light intensity
        * @var {number} Entity.Structure.Light.intensity
        * @default 1
        * @private
        */
       this.intensity = intensity;

       /**
        * Light position
        * @var {vec3} Entity.Structure.Light.location
        * @default [0, 0, 0]
        * @private
        */
       this.location = location;
    }
 }

module.exports = Light;