define("orderByDescending", ["../enumerable"], function(Enumerable)
{
    Enumerable.fn.orderByDescending = function(property, fn)
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
        var itemType = "string";

        var tempArr = this.collection;

        if(hasProperty)
        {
            if(Object.prototype.toString.call(tempArr[0][property]) === '[object Date]')
            {
                itemType = 'date';
            }
            else
            {
                itemType = (typeof tempArr[0][property]);
            }
        }
        else
        {
            if(Object.prototype.toString.call(tempArr[0]) === '[object Date]')
            {
                itemType = 'date';
            }
            else
            {
                itemType = (typeof tempArr[0]);
            }
        }

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
                    return 1;
                }

                if(propA_Value > propB_Value)
                {
                    return -1;
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
                    return b[property] - a[property];
                }
                else
                {
                    return b - a;
                }
            });
        }
        else if(itemType == 'date')
        {
            result = tempArr.sort(function(a, b)
            {
                if(hasProperty)
                {
                    return new Date(b[property]) - new Date(a[property]);
                }
                else
                {
                    return new Date(b) - new Date(a);
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
                    return -1;
                }
                else
                {
                    return 1;
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

    return Enumerable;
});