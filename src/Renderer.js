'use strict';

import Entity from './Entity';

class Renderer extends Entity
{
    constructor(
    {
        name = 'renderer'
    } = {})
    {
        super({ name });
    }
}

export default Renderer;
