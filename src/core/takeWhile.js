let Enumerable = require('../enumerable');

Enumerable.fn.takeWhile = function(fn)
{
    let results = [];

    let hasFn = (fn !== null && fn !== undefined && typeof fn === 'function');

    if(!hasFn)
    {
        return this;
    }

    for(let i = 0; i < this.collection.length; i++)
    {
        let item = this.collection[i];

        let _callbackResult = fn(i, item, this.collection);

        if(_callbackResult === true)
        {
            results.push(item);
        }
        else
        {
            break;
        }
    }

    return results.asEnumerable();
};