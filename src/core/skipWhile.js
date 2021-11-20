let Enumerable = require('../enumerable');

Enumerable.fn.skipWhile = function(fn)
{
    let results = [];
    let hasFn = (fn !== null && fn !== undefined);
    let FnIsFunction = (hasFn && typeof fn === 'function');
    let canSkip = (hasFn && FnIsFunction);
    let hasItems = this.collection.length > 0;

    if(!hasFn || !FnIsFunction)
    {
        return this;
    }

    if(canSkip && hasItems)
    {
        let end = this.collection.length;

        for(let i = 0; i < this.collection.length; i++)
        {
            let item = this.collection[i];
            let _callbackResult = fn(i, item, this.collection);

            if(_callbackResult === true)
            {
                continue;
            }
            else
            {
                return this.collection.slice(i, end).asEnumerable();
            }
        }
    }

    return results.asEnumerable();
};