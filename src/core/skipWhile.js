define("skipWhile", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.skipWhile = function(fn)
    {
        var results = [];

        var canSkip = (fn !== null && fn !== undefined && typeof fn === "function");

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

    return Enumerable;
});