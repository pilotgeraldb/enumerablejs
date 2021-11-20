let Enumerable = require('../enumerable');

Enumerable.fn.except = function(arr, fn)
{
    if(this.collection.length <= 0)
    {
        return new Enumerable(this.collection);
    }

    let result = [];

    for(let i = 0; i < this.collection.length; i++)
    {
        let item = this.collection[i];

        let contains = false;

        for(let x = 0; x < arr.length; x++)
        {
            let item2 = arr[x];

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
