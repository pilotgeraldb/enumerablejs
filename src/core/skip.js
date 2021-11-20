let Enumerable = require('../enumerable');

Enumerable.fn.skip = function(count)
{
    let results = [];

    let hasItems = (count > 0);
    let validSkipCount = (count < this.collection.length);

    let canSkip = (hasItems && validSkipCount);

    if(canSkip)
    {
        for(let i = 0; i < this.collection.length; i++)
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