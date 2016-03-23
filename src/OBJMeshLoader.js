'use strict';

import MeshLoader from './MeshLoader';

class OBJMeshLoader extends MeshLoader
{
    constructor(
    {
        path,
        indexed,
        name = 'obj.mesh.loader'
    } = {})
    {
        super({ name, path, indexed });

        this.inheritance = ['Entity', 'MeshLoader', 'OBJMeshLoader'];
    }

    parse(raw)
    {
        raw.split('\n').map(this.categorise.bind(this));
    }

    categorise(line)
    {
        let words = line.split(' ');
        let type = words.shift();
        let tmp = this.tmp;

        switch (type)
        {
            case 'v':
            tmp.vertices.push(words.map(parseFloat));
            break;

            case 'vt':
            tmp.uvs.push(words.map(parseFloat));
            break;

            case 'vn':
            tmp.normals.push(words.map(parseFloat));
            break;

            case 'f':
            words.map(this.fork.bind(this));
            break;
        }
    }

    fork(word)
    {
        let indices = word.split('/').map(value => value - 1);

        if (this.indexed)
        {
            this.keep(indices);
        }
        else
        {
            this.recategorise(indices);
        }
    }

    keep(indices)
    {
        let tmp = this.tmp;
        let index = indices[0];
        let uv = indices[1];
        let normal = indices[2];

        if (~index)
        {
            this.vertices[index] = tmp.vertices[index];

            this.indices.push(index);
        }

        if (~uv)
        {
            this.uvs[index] = tmp.uvs[uv];
        }

        if (~normal)
        {
            this.normals[index] = tmp.normals[normal];
        }
    }

    recategorise(indices)
    {
        let tmp = this.tmp;
        let position = indices[0];
        let uv = indices[1];
        let normal = indices[2];

        if (~position)
        {
            this.vertices.push(tmp.vertices[position]);
        }

        if (~uv)
        {
            this.uvs.push(tmp.uvs[uv]);
        }

        if (~normal)
        {
            this.normals.push(tmp.normals[normal]);
        }
    }
}

export default OBJMeshLoader;
