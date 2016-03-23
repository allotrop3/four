'use strict';

import Entity from './Entity';
import { vec3 } from 'gl-matrix';

class Face extends Entity
{
    constructor(
    {
        i,
        j,
        k,
        name = 'face'
    } = {})
    {
        super({ name });

        this.i = i;

        this.j = j;

        this.k = k;

        this.normal = vec3.fromValues(0, 0, 0);
    }

    get i()
    {
        return this._i;
    }

    set i(i)
    {
        this._i = i;
    }

    get j()
    {
        return this._j;
    }

    set j(j)
    {
        this._j = j;
    }

    get k()
    {
        return this._k;
    }

    set k(k)
    {
        this._k = k;
    }

    get normal()
    {
        return this._normal;
    }

    set normal(normal)
    {
        this._normal = normal;
    }
}

export default Face;
