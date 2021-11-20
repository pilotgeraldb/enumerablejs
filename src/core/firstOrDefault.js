let Enumerable = require('../enumerable');

Enumerable.fn.firstOrDefault = function(fn)
{
    if(this.collection.length > 0)
    {
        return this.collection[0];
    }

    if(fn !== null && fn !== undefined)
    {
        if(typeof fn === 'function')
        {
            return fn();
        }

        return fn;
    }

    return null;
};