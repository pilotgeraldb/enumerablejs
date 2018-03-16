var Enumerable = require('../enumerable');

Enumerable.fn.lastOrDefault = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");
    
    if(this.collection.length > 0)
    {
        return this.collection[this.collection.length - 1];
    }

    //this is another feature

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