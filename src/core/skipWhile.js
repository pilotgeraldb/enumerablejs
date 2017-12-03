var Enumerable = require('../enumerable');

Enumerable.fn.skipWhile = function(fn)
{
    var results = [];
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");
    var canSkip = (hasFn && FnIsFunction);
    var hasItems = this.collection.length > 0;

    if(!hasFn || !FnIsFunction)
    {
        return this;
    }

    if(canSkip && hasItems)
    {
        var end = this.collection.length;
        
        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];
            var _callbackResult = fn(i, item, this.collection);

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