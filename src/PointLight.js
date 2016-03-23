'use strict';

import Light from './Light';

class PointLight extends Light
{
    constructor(
    {
        path,
        ambient,
        diffuse,
        specular,
        location,
        name = 'point.light',
        uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f radius', 'f intensity', 'vec3 location', 'i type'],
        radius = 10,
        intensity = 10
    } = {})
    {
        super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

        this.radius = radius;

        this.type = 2;

        this.inheritance = ['Entity', 'Structure', 'Light', 'PointLight'];
    }

    get radius()
    {
        return this._radius;
    }

    set radius(radius)
    {
        this._radius = radius;
    }
}

export default PointLight;
