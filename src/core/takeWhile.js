var Enumerable = require('../enumerable');

Enumerable.fn.takeWhile = function(fn)
{
    var results = [];

    var hasFn = (fn !== null && fn !== undefined && typeof fn === 'function');

    if(!hasFn)
    {
        return this;
    }

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        var _callbackResult = fn(i, item, this.collection);

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