define("singleOrDefault", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.singleOrDefault = function(fn)
    {
        if(this.collection.length == 1)
        {
            return this.collection[0];
        }
        else if(this.length > 1)
        {
            throw "collection contains more than one item";
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