(function (root, factory)
{
    if (typeof exports === 'object') 
    {
        // CommonJS
        factory(exports);
    }
    else if (typeof define === 'function' && define.amd) 
    {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    }
    else 
    {
        // Browser globals
        factory(root);
    }
}
    (this, function (exports) 
    {
        Array.prototype.asEnumerable = function ()
        {
            var e = new Enumerable(this);

            return e;
        };

        var Enumerable = (function ()
        {
            function _enumerable(_array)
            {
                this.collection = _array;
            };

            _enumerable.prototype.toArray = function ()
            {
                return this.collection;
            };

            _enumerable.prototype.where = function (fn)
            {
                var results = [];

                for (var i = 0; i < this.collection.length; i++)
                {
                    var item = this.collection[i];

                    if (fn !== null && fn !== undefined && fn(i, item, this.collection))
                    {
                        results.push(item);
                    }
                }

                return results.asEnumerable();
            };

            _enumerable.prototype.select = function (obj)
            {
                var results = [];

                for (var i = 0; i < this.collection.length; i++)
                {
                    var item = this.collection[i];

                    if (obj !== null && obj !== undefined && obj.length > 0)
                    {
                        var _temp = {};
                        for (var x = 0; x < obj.length; x++)
                        {
                            var prop = obj[x];
                            for (var p in item)
                            {
                                if (p === prop)
                                {
                                    _temp[prop] = item[p];
                                }
                            }
                        }
                        results.push(_temp);
                    }
                    else
                    {
                        results.push(item);
                    }
                }

                return results.asEnumerable();
            };

            _enumerable.prototype.minimum = function ()
            {
                var result = null;

                function isNumeric(x)
                {
                    return (typeof x === 'number') && (x % 1 === 0);
                }

                var temp = [];

                for (var i = 0; i < this.collection.length; i++)
                {
                    if (isNumeric(this.collection[i]))
                    {
                        temp.push(this.collection[i]);
                    }
                }

                if (temp.length > 0)
                {
                    result = Math.min.apply(null, temp);
                }
                return result;
            };

            _enumerable.prototype.maximum = function ()
            {
                var result = null;

                function isNumeric(x)
                {
                    return (typeof x === 'number') && (x % 1 === 0);
                }

                var temp = [];

                for (var i = 0; i < this.collection.length; i++)
                {
                    if (isNumeric(this.collection[i]))
                    {
                        temp.push(this.collection[i]);
                    }
                }

                if (temp.length > 0)
                {
                    result = Math.max.apply(null, temp);
                }

                return result;
            };

            _enumerable.prototype.first = function ()
            {
                if (this.collection.length > 0)
                {
                    return this.collection[0];
                }
                else
                {
                    throw "sequence contains no elements"
                }
            };

            _enumerable.prototype.firstOrDefault = function (fn)
            {
                if (this.collection.length > 0)
                {
                    return this.collection[0];
                }

                if (fn !== null && fn !== undefined)
                {
                    if (typeof fn === "function")
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

            _enumerable.prototype.last = function ()
            {
                if (this.collection.length > 0)
                {
                    return this.collection[this.collection.length - 1];
                }
                else
                {
                    throw "sequence contains no elements"
                }
            };

            _enumerable.prototype.lastOrDefault = function (fn)
            {
                if (this.collection.length > 0)
                {
                    return this.collection[this.collection.length - 1];
                }

                if (fn !== null && fn !== undefined)
                {
                    if (typeof fn === "function")
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

            _enumerable.prototype.single = function ()
            {
                if (this.collection.length == 1)
                {
                    return this.collection[0];
                }

                if (this.collection.length < 1)
                {
                    throw "sequence contains no elements";
                }
                else
                {
                    throw "collection contains more than one item";
                }
            };

            _enumerable.prototype.singleOrDefault = function (fn)
            {
                if (this.collection.length == 1)
                {
                    return this.collection[0];
                }
                else if (this.length > 1)
                {
                    throw "collection contains more than one item";
                }

                if (fn !== null && fn !== undefined)
                {
                    if (typeof fn === "function")
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

            _enumerable.prototype.take = function (count)
            {
                if (this.collection.length == 0)
                {
                    return this;
                }

                if (this.collection.length > count)
                {
                    var results = [];

                    for (var i = 0; i < count; i++)
                    {
                        results.push(this.collection[i]);
                    }

                    return results.asEnumerable();
                }
                else
                {
                    return this;
                }
            };

            _enumerable.prototype.any = function (fn)
            {
                for (var i = 0; i < this.collection.length; i++)
                {
                    var item = this.collection[i];

                    if (item === null || item === undefined)
                    {
                        continue;
                    }

                    if (fn !== null && fn !== undefined && fn(i, item, this.collection))
                    {
                        return true;
                    }
                    else if (fn === null || fn === undefined)
                    {
                        if (this !== null && this !== undefined && this.collection.length > 0)
                        {
                            return true;
                        }
                    }
                }

                return false;
            };

            _enumerable.prototype.takeWhile = function (fn)
            {
                var results = [];

                for (var i = 0; i < this.collection.length; i++)
                {
                    var item = this.collection[i];

                    var _callbackResult = fn(i, item, this.collection);

                    if (_callbackResult !== true)
                    {
                        return results.asEnumerable();;
                    }
                    else
                    {
                        results.push(this.collection[i]);
                    }
                }

                return results.asEnumerable();
            };

            _enumerable.prototype.skip = function (count)
            {
                var results = [];

                var canSkip = ((count > 0) && (count < this.collection.length));

                if (canSkip)
                {
                    for (var i = (count - 1); i < count; i++)
                    {
                        results.push(this.collection[i]);
                    }
                }

                return results.asEnumerable();
            };

            _enumerable.prototype.skipWhile = function (fn)
            {
                var results = [];

                var canSkip = (fn !== null && fn !== undefined && typeof fn === "function");

                if (canSkip)
                {
                    for (var i = 0; i < this.collection.length; i++)
                    {
                        var item = this.collection[i];
                        var _callbackResult = fn(i, item, this.collection);

                        if (_callbackResult !== true)
                        {
                            results.push(this.collection[i]);
                        }
                    }
                }

                return results.asEnumerable();
            };

            _enumerable.prototype.count = function ()
            {
                return this.collection.length;
            };

            _enumerable.prototype.orderBy = function (property, fn)
            {
                if (!this.collection)
                {
                    return null;
                }

                if (Object.prototype.toString.call(this.collection) != '[object Array]')
                {
                    return null;
                }

                if (this.collection.length == 0)
                {
                    return new Enumerable([]);
                }

                var hasFn = (fn && typeof fn == 'function');
                var hasProperty = (property) ? true : false;

                var result = [];
                var itemType = "string";

                var tempArr = this.collection;

                if (hasProperty)
                {
                    if (Object.prototype.toString.call(tempArr[0][property]) === '[object Date]')
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
                    if (Object.prototype.toString.call(tempArr[0]) === '[object Date]')
                    {
                        itemType = 'date';
                    }
                    else
                    {
                        itemType = (typeof tempArr[0]);
                    }
                }

                if (hasFn)
                {
                    tempArr = [];
                    for (var i = 0; i < this.collection.length; i++)
                    {
                        var v = fn(this.collection[i]);

                        if (v)
                        {
                            tempArr.push(v);
                        }
                    }
                }

                if (itemType == "string")
                {
                    result = tempArr.sort(function (a, b)
                    {
                        var propA_Value = (hasProperty) ? a[property].toUpperCase() : a.toUpperCase();
                        var propB_Value = (hasProperty) ? b[property].toUpperCase() : b.toUpperCase();

                        if (propA_Value < propB_Value)
                        {
                            return -1;
                        }

                        if (propA_Value > propB_Value)
                        {
                            return 1;
                        }

                        return 0;
                    });
                }
                else if (itemType == 'number')
                {
                    result = tempArr.sort(function (a, b)
                    {
                        if (hasProperty)
                        {
                            return a[property] - b[property];
                        }
                        else
                        {
                            return a - b;
                        }
                    });
                }
                else if (itemType == 'date')
                {
                    result = tempArr.sort(function (a, b)
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
                else if (itemType == 'array')
                {
                    //not supported
                    result = this.collection;
                }
                else if (itemType == 'object')
                {
                    //not supported
                    result = this.collection;
                }

                return result.asEnumerable();
            };

            _enumerable.prototype.orderByDescending = function (property, fn)
            {
                if (!this.collection)
                {
                    return null;
                }

                if (Object.prototype.toString.call(this.collection) != '[object Array]')
                {
                    return null;
                }

                if (this.collection.length == 0)
                {
                    return new Enumerable([]);
                }

                var hasFn = (fn && typeof fn == 'function');
                var hasProperty = (property) ? true : false;

                var result = [];
                var itemType = "string";

                var tempArr = this.collection;

                if (hasProperty)
                {
                    if (Object.prototype.toString.call(tempArr[0][property]) === '[object Date]')
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
                    if (Object.prototype.toString.call(tempArr[0]) === '[object Date]')
                    {
                        itemType = 'date';
                    }
                    else
                    {
                        itemType = (typeof tempArr[0]);
                    }
                }

                if (hasFn)
                {
                    tempArr = [];
                    for (var i = 0; i < this.collection.length; i++)
                    {
                        var v = fn(this.collection[i]);

                        if (v)
                        {
                            tempArr.push(v);
                        }
                    }
                }

                if (itemType == "string")
                {
                    result = tempArr.sort(function (a, b)
                    {
                        var propA_Value = (hasProperty) ? a[property].toUpperCase() : a.toUpperCase();
                        var propB_Value = (hasProperty) ? b[property].toUpperCase() : b.toUpperCase();

                        if (propA_Value < propB_Value)
                        {
                            return 1;
                        }

                        if (propA_Value > propB_Value)
                        {
                            return -1;
                        }

                        return 0;
                    });
                }
                else if (itemType == 'number')
                {
                    result = tempArr.sort(function (a, b)
                    {
                        if (hasProperty)
                        {
                            return b[property] - a[property];
                        }
                        else
                        {
                            return b - a;
                        }
                    });
                }
                else if (itemType == 'date')
                {
                    result = tempArr.sort(function (a, b)
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
                else if (itemType == 'array')
                {
                    //not supported
                    result = this.collection;
                }
                else if (itemType == 'object')
                {
                    //not supported
                    result = this.collection;
                }

                return result.asEnumerable();
            };

            return _enumerable;
        }());

        exports.Enumerable = Enumerable;

        return Enumerable;
    }));