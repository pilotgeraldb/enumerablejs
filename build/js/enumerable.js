(function umd(require){
  if (typeof exports === 'object') {
    module.exports = require('1');
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function(){ return require('1'); });
  } else {
    this['enumerablejs'] = require('1');
  }
})((function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @api public
   */

  function require(name){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];
    var threw = true;

    try {
      fn.call(m.exports, function(req){
        var dep = modules[id][1][req];
        return require(dep || req);
      }, m, m.exports, outer, modules, cache, entries);
      threw = false;
    } finally {
      if (threw) {
        delete cache[id];
      } else if (name) {
        // expose as 'name'.
        cache[name] = cache[id];
      }
    }

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
﻿Array.prototype.asEnumerable = function()
{
    var e = new Enumerable(this);

    return e;
};

function Enumerable(_array)
{
    if(_array)
    {
        this.collection = _array;
    }
    else
    {
        this.collection = [];
    }
};

Enumerable.fn = Enumerable.prototype;

module.exports = Enumerable;

require('./core/any');
require('./core/count');
require('./core/first');
require('./core/firstOrDefault');
require('./core/last');
require('./core/lastOrDefault');
require('./core/maximum');
require('./core/minimum');
require('./core/orderBy');
require('./core/orderByDescending');
require('./core/select');
require('./core/single');
require('./core/singleOrDefault');
require('./core/skip');
require('./core/skipWhile');
require('./core/take');
require('./core/takeWhile');
require('./core/toArray');
require('./core/where');
}, {"./core/any":2,"./core/count":3,"./core/first":4,"./core/firstOrDefault":5,"./core/last":6,"./core/lastOrDefault":7,"./core/maximum":8,"./core/minimum":9,"./core/orderBy":10,"./core/orderByDescending":11,"./core/select":12,"./core/single":13,"./core/singleOrDefault":14,"./core/skip":15,"./core/skipWhile":16,"./core/take":17,"./core/takeWhile":18,"./core/toArray":19,"./core/where":20}],
2: [function(require, module, exports) {
var Enumerable = require('../enumerable');

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

module.exports = Enumerable;
}, {"../enumerable":1}],
3: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.count = function(fn)
{
    if(fn !== null && fn !== undefined && typeof fn === 'function')
    {
        var results = [];

        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];

            if(fn(i, item, this.collection))
            {
                results.push(item);
            }
        }

        return results.length;
    }
    else
    {
        return this.collection.length;
    }
};

module.exports = Enumerable;
}, {"../enumerable":1}],
4: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.first = function()
{
    if(this.collection.length > 0)
    {
        return this.collection[0];
    }
    else
    {
        throw "sequence contains no elements"
    }
};

module.exports = Enumerable;
}, {"../enumerable":1}],
5: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.firstOrDefault = function(fn)
{
    if(this.collection.length > 0)
    {
        return this.collection[0];
    }

    if(fn !== null && fn !== undefined)
    {
        if(typeof fn === "function")
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

module.exports = Enumerable;
}, {"../enumerable":1}],
6: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.last = function()
{
    if(this.collection.length > 0)
    {
        return this.collection[this.collection.length - 1];
    }
    else
    {
        throw "sequence contains no elements"
    }
};

module.exports = Enumerable;
}, {"../enumerable":1}],
7: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.lastOrDefault = function(fn)
{
    if(this.collection.length > 0)
    {
        return this.collection[this.collection.length - 1];
    }

    if(fn !== null && fn !== undefined)
    {
        if(typeof fn === "function")
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

module.exports = Enumerable;
}, {"../enumerable":1}],
8: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.maximum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (typeof x === 'number') && (x % 1 === 0);
    }

    var temp = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        if(isNumeric(this.collection[i]))
        {
            temp.push(this.collection[i]);
        }
    }

    if(temp.length > 0)
    {
        result = Math.max.apply(null, temp);
    }

    return result;
};

module.exports = Enumerable;
}, {"../enumerable":1}],
9: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.minimum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (typeof x === 'number') && (x % 1 === 0);
    }

    var temp = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        if(isNumeric(this.collection[i]))
        {
            temp.push(this.collection[i]);
        }
    }

    if(temp.length > 0)
    {
        result = Math.min.apply(null, temp);
    }
    return result;
};

module.exports = Enumerable;
}, {"../enumerable":1}],
10: [function(require, module, exports) {
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

    if(this.collection.length == 0)
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

module.exports = Enumerable;
}, {"../enumerable":1}],
11: [function(require, module, exports) {
var Enumerable = require('../enumerable');

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

    if(this.collection.length == 0)
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

module.exports = Enumerable;
}, {"../enumerable":1}],
12: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.select = function(obj)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(obj !== null && obj !== undefined && obj.length > 0)
        {
            var _temp = {};
            for(var x = 0; x < obj.length; x++)
            {
                var prop = obj[x];
                for(var p in item)
                {
                    if(p === prop)
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

module.exports = Enumerable;
}, {"../enumerable":1}],
13: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.single = function()
{
    if(this.collection.length == 1)
    {
        return this.collection[0];
    }

    if(this.collection.length < 1)
    {
        throw "sequence contains no elements";
    }
    else
    {
        throw "collection contains more than one item";
    }
};

module.exports = Enumerable;
}, {"../enumerable":1}],
14: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.singleOrDefault = function(fn)
{
    if(this.collection.length == 1)
    {
        return this.collection[0];
    }
    else if(this.length > 1)
    {
        throw "collection contains more than one item";
    }

    if(fn !== null && fn !== undefined)
    {
        if(typeof fn === "function")
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

module.exports = Enumerable;
}, {"../enumerable":1}],
15: [function(require, module, exports) {
var Enumerable = require('../enumerable');

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

module.exports = Enumerable;
}, {"../enumerable":1}],
16: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.skipWhile = function(fn)
{
    var results = [];

    var canSkip = (fn !== null && fn !== undefined && typeof fn === "function");

    if(canSkip)
    {
        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];
            var _callbackResult = fn(i, item, this.collection);

            if(_callbackResult !== true)
            {
                results.push(this.collection[i]);
            }
        }
    }

    return results.asEnumerable();
};

module.exports = Enumerable;
}, {"../enumerable":1}],
17: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.take = function(count)
{
    if(this.collection.length == 0)
    {
        return this;
    }

    if(this.collection.length > count)
    {
        var results = [];

        for(var i = 0; i < count; i++)
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

module.exports = Enumerable;
}, {"../enumerable":1}],
18: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.takeWhile = function(fn)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        var _callbackResult = fn(i, item, this.collection);

        if(_callbackResult !== true)
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

module.exports = Enumerable;
}, {"../enumerable":1}],
19: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.toArray = function()
{
    return this.collection;
};

module.exports = Enumerable;
}, {"../enumerable":1}],
20: [function(require, module, exports) {
var Enumerable = require('../enumerable');

Enumerable.fn.where = function(fn)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(fn !== null && fn !== undefined && fn(i, item, this.collection))
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};

module.exports = Enumerable;
}, {"../enumerable":1}]}, {}, {"1":""}));