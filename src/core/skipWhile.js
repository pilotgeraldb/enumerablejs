var Enumerable = require('../enumerable');

Enumerable.fn.skipWhile = function(fn)
{
    var results = [];
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");
    var canSkip = (hasFn && FnIsFunction);

    if(canSkip)
    {
        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];
            var _callbackResult = fn(i, item, this.collection);

            if(_callbackResult !== true)
            {
                results.push(this.collection[i]);
            }
        }
    }

    return results.asEnumerable();
};