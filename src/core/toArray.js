define("toArray", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.toArray = function()
    {
        return this.collection;
    };

    return Enumerable;
});