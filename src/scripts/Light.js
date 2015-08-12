'use strict';

let Structure = require('./Structure');

const _name = 'light';
const _path = 'light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location'];
const _intensity = 1;
const _location = [0, 0, 0];

/**
 * A light source to globally illuminate the scene.
 * @class Light
 * @name Entity.Structure.Light
 * @extends Entity.Structure
 * @param {string} [name=light] - Specifies the entities friendly name.
 * @param {Entity.Program} program - Specifies the program in which the uniforms should be located.
 * @param {string} [path=light] - Specifies the shader `struct` path to the uniforms, if required.
 * @param {Array} [uniforms=['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location']] - Specifies the uniform variables
 * as is declared in the shader. The names imply the `u_` namespace is used as per the uniform variable naming convention.
 * If a `struct` path is defined, the `u_` namespace is implied on this instead.
 * @param {vec3} ambient - Specifies the ambient component of the light source.
 * @param {vec3} diffuse - Specifies the diffuse component of the light source.
 * @param {vec3} specular - Specifies the specular component of the light source.
 * @param {number} [intensity=1] - Specifies the intensity of the light source.
 * @param {vec3} [location=[0, 0, 0]] - Specifies the location of the light source.
 */
 class Light extends Structure
 {
    constructor({ name = _name, program, path = _path, uniforms = _uniforms, ambient, diffuse, specular, intensity = _intensity, location = _location } = {})
    {
       super({ name, program, path: path, uniforms });

       /**
        * The ambient component of the light source.
        * @var {vec3}Entity.Structure.Light.ambient
        */
       this.ambient = ambient;

       /**
        * The diffuse component of the light source.
        * @var {vec3} Entity.Structure.Light.diffuse
        */
       this.diffuse = diffuse;

       /**
        * The specular component of the light source.
        * @var {vec3} Entity.Structure.Light.specular
        */
       this.specular = specular;

       /**
        * The light intensity of the light source.
        * @var {number} [Entity.Structure.Light.intensity=1]
        */
       this.intensity = intensity;

       /**
        * The location of the light source.
        * @var {vec3} [Entity.Structure.Light.location=[0, 0, 0]]
        */
       this.location = location;
    }
 }

module.exports = Light;