define("arrayExtensions", ["../enumerable"], function(Enumerable)
{
   Array.prototype.asEnumerable = function()
    {
        var e = new Enumerable(this);

        return e;
    };
});