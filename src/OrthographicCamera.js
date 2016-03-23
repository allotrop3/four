'use strict';

import { gl } from './Context';
import { mat4 } from 'gl-matrix';
import Camera from './Camera';

class OrthographicCamera extends Camera
{
    constructor(
    {
        path,
        uniforms,
        background,
        translucence,
        right,
        top,
        name = 'orthographic.camera',
        left = -1,
        bottom = -1,
        near = 0.1,
        far = 1
    } = {})
    {
        super({ name, path, uniforms, background, translucence });

        this.left = left;

        this.right = right;

        this.bottom = bottom;

        this.top = top;

        this.near = near;

        this.far = far;

        this.inheritance = ['Entity', 'Structure', 'Camera', 'OrthographicCamera'];

        this.configure();
    }

    get left()
    {
        return this._left;
    }

    set left(left)
    {
        this._left = left;
    }

    get right()
    {
        return this._right;
    }

    set right(right)
    {
        this._right = right;
    }

    get bottom()
    {
        return this._bottom;
    }

    set bottom(bottom)
    {
        this._bottom = bottom;
    }

    get top()
    {
        return this._top;
    }

    set top(top)
    {
        this._top = top;
    }

    get near()
    {
        return this._near;
    }

    set near(near)
    {
        this._near = near;
    }

    get far()
    {
        return this._far;
    }

    set far(far)
    {
        this._far = far;
    }

    configure()
    {
        super.configure();

        mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
        mat4.identity(this.modelViewMatrix);
    }

    bind(program)
    {
        super.bind(program);

        gl.disable(gl.DEPTH_TEST);
        gl.viewport(0, 0, this.right, this.top);
    }
}

export default OrthographicCamera;
