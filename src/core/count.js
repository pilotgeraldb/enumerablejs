let Enumerable = require('../enumerable');

Enumerable.fn.count = function(fn)
{
    let hasFn = (fn !== null && fn !== undefined && typeof fn === 'function');

    if(hasFn)
    {
        let results = [];

        for(let i = 0; i < this.collection.length; i++)
        {
            let item = this.collection[i];

            if(fn(i, item, this.collection))
            {
                results.push(item);
            }
        }

        return results.length;
    }

    return this.collection.length;
};