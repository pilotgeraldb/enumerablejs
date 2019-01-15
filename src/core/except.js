var Enumerable = require('../enumerable');

Enumerable.fn.except = function(arr, fn)
{
    if(this.collection.length <= 0)
    {
        return new Enumerable(this.collection);
    }

    var result = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        var contains = false;

        for(var x = 0; x < arr.length; x++)
        {
            var item2 = arr[x];

            if(fn && fn.getType() === 'function')
            {
                if(fn(item, item2) === true)
                {
                    contains = true;
                    break;
                }
            }
            else
            {
                if(item2.getType() === 'object' && item.getType() === 'object')
                {
                    if(item2.isEqual(item))
                    {
                        contains = true;
                        break;
                    }
                }
                else
                {
                    if(item2 === item)
                    {
                        contains = true;
                        break;
                    }
                }
            }
        }

        if(contains === false)
        {
            result.push(item);
        }
    }

    return result.asEnumerable();
};
