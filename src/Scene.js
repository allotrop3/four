'use strict';

import { vec3 } from 'gl-matrix';
import Entity from './Entity';

class Scene extends Entity
{
    constructor(
    {
        name = 'scene'
    } = {})
    {
        super({ name });

        this.program = undefined;

        this.meshes = [];

        this.simulations = [];

        this.lights = [];

        this.scale = vec3.fromValues(1, 1, 1);

        this.rotation = 0;

        this.translation = vec3.fromValues(0, 0, 0);

        this.inheritance = ['Entity', 'Scene'];
    }

    get program()
    {
        return this._program;
    }

    set program(program)
    {
        this._program = program;
    }

    get meshes()
    {
        return this._meshes;
    }

    set meshes(meshes)
    {
        this._meshes = meshes;
    }

    get lights()
    {
        return this._lights;
    }

    set lights(lights)
    {
        this._lights = lights;
    }

    get scale()
    {
        return this._scale;
    }

    set scale(scale)
    {
        this._scale = scale;
    }

    get rotation()
    {
        return this._rotation;
    }

    set rotation(rotation)
    {
        this._rotation = rotation;
    }

    get translation()
    {
        return this._translation;
    }

    set translation(translation)
    {
        this._translation = translation;
    }

    use(program)
    {
        program.bind();

        this.program = program;
    }

    put(item)
    {
        switch (true)
        {
            case item.isType('Mesh'):
            this.meshes.push(item);
            break;

            case item.isType('ParticleSystem'):
            this.simulations.push(item);
            this.meshes.push(item.mesh);
            break;

            case item.isType('Light'):
            this.lights.push(item);
            break;

            default:
            console.warn(`${item.name} disallowed in scene`);
            break;
        }
    }

    animate(target, camera, pre = false, post = false)
    {
        let step = this.animate.bind(this, target, camera, pre, post);

        this.render.apply(this, arguments);

        requestAnimationFrame(step);
    }

    render(target, camera, pre = false, post = false)
    {
        let program = this.program;

        target.bind();

        if (pre)
        {
            pre();
        }

        camera.save();

        camera.scale.apply(camera, this.scale);
        camera.rotate(this.rotation);
        camera.translate.apply(camera, this.translation);

        this.lights.forEach(light => light.bind(program));
        this.simulations.forEach(simulation => simulation.solve());
        this.meshes.forEach(this.draw.bind(this, camera));

        camera.restore();

        if (post)
        {
            post();
        }

        target.unbind();
    }

    draw(camera, mesh)
    {
        let program = this.program;
        let material = mesh.material;

        camera.save();

        camera.scale.apply(camera, mesh.scale);
        camera.rotate(mesh.rotation);
        camera.translate.apply(camera, mesh.translation);

        camera.bind(program);

        material.bind(program)

        mesh.draw({ program });

        material.unbind();

        camera.restore();
    }
}

export default Scene;
