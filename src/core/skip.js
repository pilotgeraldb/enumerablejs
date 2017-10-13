define("skip", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.skip = function(count)
    {
        var results = [];

        var canSkip = ((count > 0) && (count < this.collection.length));

        if(canSkip)
        {
            for(var i = (count - 1); i < count; i++)
            {
                results.push(this.collection[i]);
            }
        }

        return results.asEnumerable();
    };

    return Enumerable;
});