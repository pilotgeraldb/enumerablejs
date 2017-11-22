(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Enumerable"] = factory();
	else
		root["Enumerable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

Array.prototype.asEnumerable = function()
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

__webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Array.prototype.asEnumerable = function()
{
    var e = new Enumerable(this);

    return e;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.toArray = function()
{
    return this.collection;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

/***/ })
/******/ ]);
});