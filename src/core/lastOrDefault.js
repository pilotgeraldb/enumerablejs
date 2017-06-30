define("lastOrDefault", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.lastOrDefault = function(fn)
    {
        if(this.collection.length > 0)
        {
            return this.collection[this.collection.length - 1];
        }

        if(fn !== null && fn !== undefined)
        {
            if(typeof fn === "function")
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

    return Enumerable;
});