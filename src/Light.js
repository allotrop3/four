'use strict';

import { vec3 } from 'gl-matrix';
import LSL from './utils/LSL';
import Structure from './Structure';

class Light extends Structure
{
    constructor(
    {
        name = 'light',
        path = 'light',
        uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f intensity', 'vec3 location', 'i type'],
        ambient = 0x000000,
        diffuse = 0xFFFFFF,
        specular = 0xFFFFFF,
        intensity = 1,
        location = vec3.fromValues(-10, 10, -10)
    } = {})
    {
        super({ name, path, uniforms });

        this.ambient = ambient;

        this.diffuse = diffuse;

        this.specular = specular;

        this.intensity = intensity;

        this.location = location;

        this.type = 0;

        this.inheritance = ['Entity', 'Structure', 'Light'];
    }

    get ambient()
    {
        return this._ambient;
    }

    set ambient(ambient)
    {
        this._ambient = LSL(ambient);
    }

    get diffuse()
    {
        return this._diffuse;
    }

    set diffuse(diffuse)
    {
        this._diffuse = LSL(diffuse);
    }

    get specular()
    {
        return this._specular;
    }

    set specular(specular)
    {
        this._specular = LSL(specular);
    }

    get intensity()
    {
        return this._intensity;
    }

    set intensity(intensity)
    {
        this._intensity = intensity;
    }

    get location()
    {
        return this._location;
    }

    set location(location)
    {
        this._location = location;
    }

    get type()
    {
        return this._type;
    }

    set type(type)
    {
        this._type = type;
    }
}

export default Light;
