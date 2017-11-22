var Enumerable = require('../enumerable');

Enumerable.fn.where = function(fn)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(fn !== null && fn !== undefined && fn(i, item, this.collection))
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};