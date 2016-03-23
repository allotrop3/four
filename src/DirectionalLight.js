'use strict';

import { vec3 } from 'gl-matrix';
import Light from './Light';

class DirectionalLight extends Light
{
    constructor(
    {
        path,
        ambient,
        diffuse,
        specular,
        intensity,
        location,
        name = 'directional.light',
        uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'vec3 direction', 'i type'],
        direction = vec3.fromValues(0, 0, 0)
    } = {})
    {
        super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

        this.direction = direction;

        this.type = 1;

        this.inheritance = ['Entity', 'Structure', 'Light', 'DirectionalLight'];
    }

    get direction()
    {
        return this._direction;
    }

    set direction(direction)
    {
        this._direction = direction;
    }
}

export default DirectionalLight;
