var Enumerable = require('../enumerable');

Enumerable.fn.singleOrDefault = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    if(this.collection.length == 1)
    {
        return this.collection[0];
    }
    else if(this.length > 1)
    {
        throw "collection contains more than one item";
    }

    if(hasFn)
    {
        if(FnIsFunction)
        {
            return fn();
        }
        else
        {
            return fn;
        }
    }

    return null;
};
