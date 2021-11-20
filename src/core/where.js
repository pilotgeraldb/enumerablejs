let Enumerable = require('../enumerable');

Enumerable.fn.where = function(fn)
{
    let results = [];

    let hasFn = (fn !== null && fn !== undefined);
    let FnIsFunction = (hasFn && typeof fn === 'function');

    for(let i = 0; i < this.collection.length; i++)
    {
        let item = this.collection[i];

        if(hasFn && FnIsFunction && fn(i, item, this.collection))
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};