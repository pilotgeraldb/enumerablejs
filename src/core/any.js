define("any", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.any = function(fn)
    {
        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];

            if(item === null || item === undefined)
            {
                continue;
            }

            if(fn !== null && fn !== undefined && fn(i, item, this.collection))
            {
                return true;
            }
            else if(fn === null || fn === undefined)
            {
                if(this !== null && this !== undefined && this.collection.length > 0)
                {
                    return true;
                }
            }
        }

        return false;
    };

    return Enumerable;
});