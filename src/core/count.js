var Enumerable = require('../enumerable');

Enumerable.fn.count = function(fn)
{
    if(fn !== null && fn !== undefined && typeof fn === 'function')
    {
        var results = [];

        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];

            if(fn(i, item, this.collection))
            {
                results.push(item);
            }
        }

        return results.length;
    }
    else
    {
        return this.collection.length;
    }
};