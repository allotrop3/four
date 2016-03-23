'use strict';

import Entity from './Entity';
import promise from './utils/promise';

class Bundle extends Entity
{
    constructor(
    {
        name = 'bundle',
        items = [],
        step = function() {}
    } = {})
    {
        super({ name });

        this.promises = items;

        this.size = items.length;

        this.progress = items.length;

        this.step = step;

        this.inheritance = ['Entity', 'Bundle'];
    }

    get promises()
    {
        return this._promises;
    }

    set promises(items)
    {
        this._promises = Object.keys(items).map(name => items[name].promise.then(this.next.bind(this)));
    }

    get size()
    {
        return this._size;
    }

    set size(size)
    {
        this._size = size;
    }

    get progress()
    {
        return this._progress;
    }

    set progress(progress)
    {
        this._progress = progress;
    }

    get step()
    {
        return this._step;
    }

    set step(step)
    {
        this._step = step;
    }

    next()
    {
        let count = (--this.progress);
        let progress = 100 - (count / this.size * 100);

        this.step(progress);
    }

    sync(item)
    {
        this.promises.push(item.promise);
    }

    ready(main)
    {
        return this.promise = promise().all(this.promises).then(function()
        {
            main();
        });
    }
}

export default Bundle;
