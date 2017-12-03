var Enumerable = require('../enumerable');

Enumerable.fn.where = function(fn)
{
    var results = [];

    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(hasFn && FnIsFunction && fn(i, item, this.collection))
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};