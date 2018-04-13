(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Enumerable"] = factory();
	else
		root["Enumerable"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
}

Enumerable.fn = Enumerable.prototype;

Enumerable.Range = function(start, count)
{
    var result = [];

    for(var i = 0; i < count; i++)
    {
        result[i]  = start + i;
    }

    return result.asEnumerable();
};

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
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);

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
/***/ (function(module, exports) {

Object.prototype.getType = function()
{
  var typeString = Object.prototype.toString.call(this);

  if(typeString === '[object Date]')
  {
    return 'date';
  }
  else if(typeString === '[object String]')
  {
    return 'string';
  }
  else if(typeString === '[object Number]')
  {
    return 'number';
  }
  else if(typeString === '[object Boolean]')
  {
    return 'boolean';
  }
  else if(typeString === '[object Array]')
  {
    return 'array';
  }
  else if(typeString === '[object Object]')
  {
    return 'object';
  }
  else if(typeof this === "function")
  {
    return 'function';
  }

  return typeString;
};

Object.prototype.isEqual = function(object2, order_matters)
{
  var keys1 = Object.keys(this),
    keys2 = Object.keys(object2),
    i, key;

  // Test 1: Same number of elements
  if(keys1.length != keys2.length)
  {
    return false;
  }

  // If order doesn't matter isEqual({a:2, b:1}, {b:1, a:2}) should return true.
  // keys1 = Object.keys({a:2, b:1}) = ["a","b"];
  // keys2 = Object.keys({b:1, a:2}) = ["b","a"];
  // This is why we are sorting keys1 and keys2.
  if(!order_matters)
  {
    keys1.sort();
    keys2.sort();
  }

  // Test 2: Same keys
  for(i = 0; i < keys1.length; i++)
  {
    if(keys1[i] != keys2[i])
    {
      return false;
    }
  }

  // Test 3: Values
  for(i = 0; i < keys1.length; i++)
  {
    key = keys1[i];
    if(this[key] != object2[key])
    {
      return false;
    }
  }

  return true;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.toArray = function()
{
    return this.collection;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.any = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    if(!hasFn)
    {
        if(this !== null && this !== undefined && this.collection.length > 0)
        {
            return true;
        }
    }

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(item === null || item === undefined)
        {
            continue;
        }

        if(hasFn && FnIsFunction && fn(i, item, this.collection))
        {
            return true;
        }
        
    }

    return false;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.count = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined && typeof fn === 'function');

    if(hasFn)
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
/* 7 */
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
        throw "sequence contains no elements";
    }
};


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.dropFirst = function(count)
{
    if(count <= 0)
    {
        return new Enumerable(this.collection);
    }

    if(this.collection.length > count)
    {
        return new Enumerable(this.collection.splice(this.collection.length - count, count));
    }
    else
    {
        return new Enumerable();
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.dropLast = function(count)
{
    if(count <= 0)
    {
        return new Enumerable(this.collection);
    }

    if(this.collection.length > count)
    {
        return new Enumerable(this.collection.splice(0, this.collection.length - count));
    }
    else
    {
        return new Enumerable();
    }
};

/***/ }),
/* 11 */
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
        throw "sequence contains no elements";
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.lastOrDefault = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");
    
    if(this.collection.length > 0)
    {
        return this.collection[this.collection.length - 1];
    }

    if(hasFn)
    {
        if(FnIsFunction)
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.shuffle = function()
{
    var currentIndex = this.collection.length;
    var temporaryValue;
    var randomIndex;

    while (0 !== currentIndex) 
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
      temporaryValue = this.collection[currentIndex];
      this.collection[currentIndex] = this.collection[randomIndex];
      this.collection[randomIndex] = temporaryValue;
    }
    
    return new Enumerable(this.collection);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

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

            if(fn && fn.getType() === "function")
            {
                if(fn(item, item2) === true)
                {
                    contains = true;
                    break;
                }
            }
            else
            {
                if(item2.getType() == "object" && item.getType() == "object")
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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.maximum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (x !== null && x.getType() === 'number') && (x % 1 === 0);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.minimum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (x !== null && x.getType() === 'number') && (x % 1 === 0);
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
/* 17 */
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

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.select = function(obj)
{
    var results = [];

    function explicit(item, obj)
    {
        var _temp = {};
        
        if(obj.length == 1)
        {
            for(var p in item)
            {
                if(p === obj[0])
                {
                    _temp = item[p];
                    break;
                }
            }
        }
        else
        {
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
        }
        
        results.push(_temp);
    }

    function funcEval(obj, i, item, col)
    {
        results.push(obj(i, item, col));
    }

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(obj !== null && obj !== undefined && obj.length > 0)
        {
            if(obj.getType() == 'function')
            {
                funcEval(obj, i, item, this.collection);
            }
            else
            {
                explicit(item, obj);
            }
        }
        else
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.singleOrDefault = function(fn)
{
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    if(this.collection.length == 1)
    {
        return this.collection[0];
    }
    else if(this.length > 1)
    {
        throw "collection contains more than one item";
    }

    if(hasFn)
    {
        if(FnIsFunction)
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.skip = function(count)
{
    var results = [];

    var hasItems = (count > 0);
    var validSkipCount = (count < this.collection.length);

    var canSkip = (hasItems && validSkipCount);

    if(canSkip)
    {
        for(var i = 0; i < this.collection.length; i++)
        {
            if(i < count)
            {
                continue;
            }
            
            results.push(this.collection[i]);
        }
    }
    else
    {
        return this;
    }

    return results.asEnumerable();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.skipWhile = function(fn)
{
    var results = [];
    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");
    var canSkip = (hasFn && FnIsFunction);
    var hasItems = this.collection.length > 0;

    if(!hasFn || !FnIsFunction)
    {
        return this;
    }

    if(canSkip && hasItems)
    {
        var end = this.collection.length;
        
        for(var i = 0; i < this.collection.length; i++)
        {
            var item = this.collection[i];
            var _callbackResult = fn(i, item, this.collection);

            if(_callbackResult === true)
            {
                continue;
            }
            else
            {
                return this.collection.slice(i, end).asEnumerable();
            }
        }
    }

    return results.asEnumerable();
};

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.takeWhile = function(fn)
{
    var results = [];

    var hasFn = (fn !== null && fn !== undefined && typeof fn === 'function');

    if(!hasFn)
    {
        return this;
    }

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        var _callbackResult = fn(i, item, this.collection);

        if(_callbackResult === true)
        {
            results.push(item);
        }
        else
        {
            break;
        }
    }

    return results.asEnumerable();
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(0);

Enumerable.fn.where = function(fn)
{
    var results = [];

    var hasFn = (fn !== null && fn !== undefined);
    var FnIsFunction = (hasFn && typeof fn === "function");

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(hasFn && FnIsFunction && fn(i, item, this.collection))
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};

/***/ })
/******/ ]);
});