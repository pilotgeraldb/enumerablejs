var Enumerable = require('../enumerable');

Enumerable.fn.take = function(count)
{
    if(this.collection.length === 0)
    {
        return this;
    }

    if(this.collection.length > count)
    {
        var results = [];

        for(var i = 0; i < count; i++)
        {
            results.push(this.collection[i]);
        }

        return results.asEnumerable();
    }

    return this;
};