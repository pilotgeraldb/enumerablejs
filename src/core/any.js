let Enumerable = require('../enumerable');

Enumerable.fn.any = function(fn)
{
    let hasFn = (fn !== null && fn !== undefined);
    let FnIsFunction = (hasFn && typeof fn === 'function');

    if(!hasFn)
    {
        if(this !== null && this !== undefined && this.collection.length > 0)
        {
            return true;
        }
    }

    for(let i = 0; i < this.collection.length; i++)
    {
        let item = this.collection[i];

        if(item === null || item === undefined)
        {
            continue;
        }

        if(hasFn && FnIsFunction && fn(i, item, this.collection))
        {
            return true;
        }
    }

    return false;
};