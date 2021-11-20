let Enumerable = require('../enumerable');

Enumerable.fn.orderByDescending = function(property, fn)
{
    if(!this.collection)
    {
        return null;
    }

    if(Object.prototype.toString.call(this.collection) !== '[object Array]')
    {
        return null;
    }

    if(this.collection.length === 0)
    {
        return new Enumerable([]);
    }

    let hasFn = (fn && typeof fn === 'function');
    let hasProperty = property !== undefined && property !== null;

    let result = [];

    let tempArr = this.collection;

    let itemType = (hasProperty) ? tempArr[0][property].getType() : tempArr[0].getType();

    if(hasFn)
    {
        tempArr = [];
        for(let i = 0; i < this.collection.length; i++)
        {
            let v = fn(this.collection[i]);

            if(v)
            {
                tempArr.push(v);
            }
        }
    }

    if(itemType === 'string')
    {
        result = tempArr.sort(function(a, b)
        {
            let propA_Value = (hasProperty) ? a[property].toUpperCase() : a.toUpperCase();
            let propB_Value = (hasProperty) ? b[property].toUpperCase() : b.toUpperCase();

            if(propA_Value < propB_Value)
            {
                return 1;
            }

            if(propA_Value > propB_Value)
            {
                return -1;
            }

            return 0;
        });
    }
    else if(itemType === 'number')
    {
        result = tempArr.sort(function(a, b)
        {
            if(hasProperty)
            {
                return b[property] - a[property];
            }

            return b - a;
        });
    }
    else if(itemType === 'date')
    {
        result = tempArr.sort(function(a, b)
        {
            if(hasProperty)
            {
                return new Date(b[property]) - new Date(a[property]);
            }

            return new Date(b) - new Date(a);
        });
    }
    else if(itemType === 'boolean')
    {
        result = tempArr.sort(function(x, y)
        {
            // true values first
            if(x === y)
            {
                return 0;
            }
            else if(x)
            {
                return -1;
            }

            return 1;
        });
    }
    else if(itemType === 'array')
    {
        // not supported
        result = this.collection;
    }
    else if(itemType === 'object')
    {
        // not supported
        result = this.collection;
    }

    return result.asEnumerable();
};