'use strict';

import Entity from './Entity';

let gl = undefined;

class Context extends Entity
{
    constructor(
    {
        name = 'canvas',
        selector = 'canvas',
        width = window.innerWidth,
        height = window.innerHeight,
        dpi = window.devicePixelRatio
    } = {})
    {
        super({ name });

        this.canvas = undefined;

        this.width = width;

        this.height = height;

        this.dpi = dpi;

        this.gl = undefined;

        this.inheritance = ['Entity', 'Context'];

        this.prime(selector);
        this.contextualise();
    }

    get canvas()
    {
        return this._canvas;
    }

    set canvas(canvas)
    {
        this._canvas = canvas;
    }

    get width()
    {
        return this._width * this._dpi;
    }

    set width(width)
    {
        this._width = width;
    }

    get height()
    {
        return this._height * this._dpi;
    }

    set height(height)
    {
        this._height = height;
    }

    get dpi()
    {
        return this._dpi;
    }

    set dpi(dpi)
    {
        this._dpi = dpi;
    }

    get gl()
    {
        return this._gl;
    }

    set gl(gl)
    {
        this._gl = gl;
    }

    prime(selector)
    {
        let canvas = document.querySelector(selector);
        let width = this.width;
        let height = this.height;
        let dpi = this.dpi;

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        canvas.style.width = width / dpi;
        canvas.style.height = height / dpi;

        this.canvas = canvas;
    }

    contextualise()
    {
        let canvas = this.canvas;

        this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        gl = this.gl;
    }

    use()
    {
        gl = this.gl;
    }
}

export { gl };
export default Context;
