'use strict';

let indices = {};

class Entity
{
    constructor(
    {
        name = 'entity'
    } = {})
    {
        this.name = name;

        this.basename = name;

        this.inheritance = ['Entity'];
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        if (indices[name] === undefined)
        {
            indices[name] = -1;
        }

        indices[name]++;

        this._name = `${name}.0${indices[name]}`;
    }

    get basename()
    {
        return this._basename;
    }

    set basename(basename)
    {
        this._basename = basename;
    }

    get inheritance()
    {
        return this._inheritance;
    }

    set inheritance(inheritance)
    {
        this._inheritance = inheritance;
    }

    isType(entity)
    {
        return this.inheritance.indexOf(entity) !== -1;
    }
}

export default Entity;
