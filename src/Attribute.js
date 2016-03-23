'use strict';

import { gl } from './Context';
import Entity from './Entity';

class Attribute extends Entity
{
    constructor(
    {
        attribute,
        length,
        name = 'attribute',
        format = 'FLOAT',
        normalized = false,
        offset = 0
    } = {})
    {
        super({ name });

        this.attribute = attribute;

        this.location = undefined;

        this.length = length;

        this.format = format;

        this.normalized = normalized;

        this.offset = offset;

        this.inheritance = ['Entity', 'Attribute'];
    }

    get attribute()
    {
        return this._attribute;
    }

    set attribute(attribute)
    {
        this._attribute = attribute;
    }

    get location()
    {
        return this._location;
    }

    set location(location)
    {
        this._location = location;
    }

    get length()
    {
        return this._length;
    }

    set length(length)
    {
        this._length = length;
    }

    get format()
    {
        return gl[this._format];
    }

    set format(format)
    {
        this._format = format;
    }

    get normalized()
    {
        return this._normalized;
    }

    set normalized(normalized)
    {
        this._normalized = normalized;
    }

    get offset()
    {
        return this._offset;
    }

    set offset(offset)
    {
        this._offset = offset;
    }

    get length()
    {
        return this._length;
    }

    set length(length)
    {
        this._length = length;
    }

    getByteCount(bytes)
    {
        return this.length * bytes;
    }

    locate(program)
    {
        return this.location = gl.getAttribLocation(program.buffer, `a_${this.attribute}`);
    }

    enable(program, stride = 0)
    {
        let location = this.locate(program);

        if (~location)
        {
            gl.enableVertexAttribArray(location);

            gl.vertexAttribPointer(location, this.length, this.format, this.normalized, stride, this.offset);
        }
    }

    disable()
    {
        let location = this.location;

        if (~location)
        {
            gl.disableVertexAttribArray(location);
        }
    }
}

export default Attribute;
