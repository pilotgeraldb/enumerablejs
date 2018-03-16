var Enumerable = require('../enumerable');

Enumerable.fn.any = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    //adding some new dummy feature here.

    if(!hasFn)
    {
        if(this !== null && this !== undefined && this.collection.length > 0)
        {
            return true;
        }
    }

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

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