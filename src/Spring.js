'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

const spread = {
    STRUCTURAL: 100,
    SHEAR: 10,
    BEND: 1
};

class Spring extends Entity
{
    constructor(
    {
        i,
        j,
        stiffness,
        damping,
        name = 'spring',
        type = 'STRUCTURAL'
    } = {})
    {
        super({ name });

        this.i = i;

        this.j = j;

        this.length = vec3.distance(i.position, j.position);

        this.type = type;

        this.stiffness = stiffness;

        this.damping = damping;

        this.inheritance = ['Entity', 'Spring'];
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

    get length()
    {
        return this._length;
    }

    set length(length)
    {
        this._length = length;
    }

    get type()
    {
        return this._type;
    }

    set type(type)
    {
        this._type = type;
    }

    get stiffness()
    {
        return this._stiffness;
    }

    set stiffness(stiffness)
    {
        this._stiffness = this.spread(stiffness);
    }

    get damping()
    {
        return this._damping;
    }

    set damping(damping)
    {
        this._damping = this.spread(damping);
    }

    spread(value)
    {
        return value * (spread[this.type] / 100);
    }

    relax()
    {
        let i = this.i;
        let j = this.j;
        let spring = vec3.sub(vec3.create(), i.position, j.position);
        let length = vec3.length(spring);
        let normal = vec3.normalize(vec3.create(), spring);
        let velocity = vec3.sub(vec3.create(), i.velocity, j.velocity);
        let relaxation = this.stiffness * (length - this.length);
        let resistance = this.damping * vec3.dot(velocity, normal);
        let force = vec3.scale(vec3.create(), normal, relaxation + resistance);

        i.exert(vec3.negate(vec3.create(), force));
        j.exert(force);
    }
}

export default Spring;
