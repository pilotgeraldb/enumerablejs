let Enumerable = require('../enumerable');

Enumerable.fn.singleOrDefault = function(fn)
{
    let hasFn = (fn !== null && fn !== undefined);
    let FnIsFunction = (hasFn && typeof fn === 'function');

    if(this.collection.length === 1)
    {
        return this.collection[0];
    }
    else if(this.length > 1)
    {
        throw new Error('collection contains more than one item');
    }

    if(hasFn)
    {
        if(FnIsFunction)
        {
            return fn();
        }
        return fn;
    }

    return null;
};
