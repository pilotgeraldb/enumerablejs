var Enumerable = require('../enumerable');

Enumerable.fn.skip = function(count)
{
    var results = [];

    var hasItems = (count > 0);
    var validSkipCount = (count < this.collection.length);

    var canSkip = (hasItems && validSkipCount);

    if(canSkip)
    {
        for(var i = 0; i < this.collection.length; i++)
        {
            if(i < count)
            {
                continue;
            }

            results.push(this.collection[i]);
        }
    }
    else
    {
        return this;
    }

    return results.asEnumerable();
};