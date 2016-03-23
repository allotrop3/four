'use strict';

import { gl } from './Context';
import Entity from './Entity';
import shaders from './shaders/shaders';

class Shader extends Entity
{
    constructor(
    {
        selector,
        name = 'shader'
    } = {}, type)
    {
        super({ name });

        this.buffer = gl.createShader(gl[type]);

        this.inheritance = ['Entity', 'Shader'];

        this.compile(type, selector);
    }

    get buffer()
    {
        return this._buffer;
    }

    set buffer(buffer)
    {
        this._buffer = buffer;
    }

    generate(type, selector)
    {
        let source = document.querySelector(selector).textContent;

        for (let tag in shaders)
        {
            source = source.replace(`@use ${tag};`, shaders[tag][type]);
        }

        return source;
    }

    compile(type, selector)
    {
        let buffer = this.buffer;
        let source = this.generate(type, selector);

        gl.shaderSource(buffer, source);
        gl.compileShader(buffer);

        this.check();
    }

    check()
    {
        let buffer = this.buffer;
        let status = gl.getShaderParameter(buffer, gl.COMPILE_STATUS);
        let context = gl.isContextLost();

        if (!status && !context)
        {
            let error = gl.getShaderInfoLog(buffer);

            gl.deleteShader(buffer);

            throw new Error(error);
        }

        return true;
    }
}

export default Shader;
