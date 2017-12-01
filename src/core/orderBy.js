var Enumerable = require('../enumerable');

Enumerable.fn.orderBy = function(property, fn)
{
    if(!this.collection)
    {
        return null;
    }

    if(Object.prototype.toString.call(this.collection) != '[object Array]')
    {
        return null;
    }

    if(this.collection.length === 0)
    {
        return new Enumerable([]);
    }

    var hasFn = (fn && typeof fn == 'function');
    var hasProperty = (property) ? true : false;

    var result = [];

    var tempArr = this.collection;

    var itemType = (hasProperty) ? tempArr[0][property].getType() : tempArr[0].getType();
    
    if(hasFn)
    {
        tempArr = [];
        for(var i = 0; i < this.collection.length; i++)
        {
            var v = fn(this.collection[i]);

            if(v)
            {
                tempArr.push(v);
            }
        }
    }

    if(itemType == "string")
    {
        result = tempArr.sort(function(a, b)
        {
            var propA_Value = (hasProperty) ? a[property].toUpperCase() : a.toUpperCase();
            var propB_Value = (hasProperty) ? b[property].toUpperCase() : b.toUpperCase();

            if(propA_Value < propB_Value)
            {
                return -1;
            }

            if(propA_Value > propB_Value)
            {
                return 1;
            }

            return 0;
        });
    }
    else if(itemType == 'number')
    {
        result = tempArr.sort(function(a, b)
        {
            if(hasProperty)
            {
                return a[property] - b[property];
            }
            else
            {
                return a - b;
            }
        });
    }
    else if(itemType == 'date')
    {
        result = tempArr.sort(function(a, b)
        {
            if(hasProperty)
            {
                return new Date(a[property]) - new Date(b[property]);
            }
            else
            {
                return new Date(a) - new Date(b);
            }
        });
    }
    else if(itemType == 'boolean')
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
                return 1;
            }
            else
            {
                return -1;
            }
        });
    }
    else if(itemType == 'array')
    {
        //not supported
        result = this.collection;
    }
    else if(itemType == 'object')
    {
        //not supported
        result = this.collection;
    }

    return result.asEnumerable();
};