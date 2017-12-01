var Enumerable = require('../enumerable');

Enumerable.fn.takeWhile = function(fn)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        var _callbackResult = fn(i, item, this.collection);

        if(_callbackResult !== true)
        {
            return results.asEnumerable();
        }
        else
        {
            results.push(this.collection[i]);
        }
    }

    return results.asEnumerable();
};