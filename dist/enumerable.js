(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("enumerable", [], factory);
	else if(typeof exports === 'object')
		exports["enumerable"] = factory();
	else
		root["enumerable"] = factory();
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/enumerable.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/any.js":
/*!*************************!*\
  !*** ./src/core/any.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.any = function (fn) {
  var hasFn = fn !== null && fn !== undefined;
  var FnIsFunction = hasFn && typeof fn === 'function';

  if (!hasFn) {
    if (this !== null && this !== undefined && this.collection.length > 0) {
      return true;
    }
  }

  for (var i = 0; i < this.collection.length; i++) {
    var item = this.collection[i];

    if (item === null || item === undefined) {
      continue;
    }

    if (hasFn && FnIsFunction && fn(i, item, this.collection)) {
      return true;
    }
  }

  return false;
};

/***/ }),

/***/ "./src/core/count.js":
/*!***************************!*\
  !*** ./src/core/count.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.count = function (fn) {
  var hasFn = fn !== null && fn !== undefined && typeof fn === 'function';

  if (hasFn) {
    var results = [];

    for (var i = 0; i < this.collection.length; i++) {
      var item = this.collection[i];

      if (fn(i, item, this.collection)) {
        results.push(item);
      }
    }

    return results.length;
  }

  return this.collection.length;
};

/***/ }),

/***/ "./src/core/dropFirst.js":
/*!*******************************!*\
  !*** ./src/core/dropFirst.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.dropFirst = function (count) {
  if (count <= 0) {
    return new Enumerable(this.collection);
  }

  if (this.collection.length > count) {
    return new Enumerable(this.collection.splice(this.collection.length - count, count));
  }

  return new Enumerable();
};

/***/ }),

/***/ "./src/core/dropLast.js":
/*!******************************!*\
  !*** ./src/core/dropLast.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.dropLast = function (count) {
  if (count <= 0) {
    return new Enumerable(this.collection);
  }

  if (this.collection.length > count) {
    return new Enumerable(this.collection.splice(0, this.collection.length - count));
  }

  return new Enumerable();
};

/***/ }),

/***/ "./src/core/except.js":
/*!****************************!*\
  !*** ./src/core/except.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.except = function (arr, fn) {
  if (this.collection.length <= 0) {
    return new Enumerable(this.collection);
  }

  var result = [];

  for (var i = 0; i < this.collection.length; i++) {
    var item = this.collection[i];
    var contains = false;

    for (var x = 0; x < arr.length; x++) {
      var item2 = arr[x];

      if (fn && fn.getType() === 'function') {
        if (fn(item, item2) === true) {
          contains = true;
          break;
        }
      } else {
        if (item2.getType() === 'object' && item.getType() === 'object') {
          if (item2.isEqual(item)) {
            contains = true;
            break;
          }
        } else {
          if (item2 === item) {
            contains = true;
            break;
          }
        }
      }
    }

    if (contains === false) {
      result.push(item);
    }
  }

  return result.asEnumerable();
};

/***/ }),

/***/ "./src/core/first.js":
/*!***************************!*\
  !*** ./src/core/first.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.first = function () {
  if (this.collection.length > 0) {
    return this.collection[0];
  }

  throw new Error('sequence contains no elements');
};

/***/ }),

/***/ "./src/core/firstOrDefault.js":
/*!************************************!*\
  !*** ./src/core/firstOrDefault.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.firstOrDefault = function (fn) {
  if (this.collection.length > 0) {
    return this.collection[0];
  }

  if (fn !== null && fn !== undefined) {
    if (typeof fn === 'function') {
      return fn();
    }

    return fn;
  }

  return null;
};

/***/ }),

/***/ "./src/core/last.js":
/*!**************************!*\
  !*** ./src/core/last.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.last = function () {
  if (this.collection.length > 0) {
    return this.collection[this.collection.length - 1];
  }

  throw new Error('sequence contains no elements');
};

/***/ }),

/***/ "./src/core/lastOrDefault.js":
/*!***********************************!*\
  !*** ./src/core/lastOrDefault.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.lastOrDefault = function (fn) {
  var hasFn = fn !== null && fn !== undefined;
  var FnIsFunction = hasFn && typeof fn === 'function';

  if (this.collection.length > 0) {
    return this.collection[this.collection.length - 1];
  }

  if (hasFn) {
    if (FnIsFunction) {
      return fn();
    }

    return fn;
  }

  return null;
};

/***/ }),

/***/ "./src/core/maximum.js":
/*!*****************************!*\
  !*** ./src/core/maximum.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.maximum = function () {
  var result = null;

  function isNumeric(x) {
    return x !== null && x.getType() === 'number' && x % 1 === 0;
  }

  var temp = [];

  for (var i = 0; i < this.collection.length; i++) {
    if (isNumeric(this.collection[i])) {
      temp.push(this.collection[i]);
    }
  }

  if (temp.length > 0) {
    result = Math.max.apply(null, temp);
  }

  return result;
};

/***/ }),

/***/ "./src/core/minimum.js":
/*!*****************************!*\
  !*** ./src/core/minimum.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.minimum = function () {
  var result = null;

  function isNumeric(x) {
    return x !== null && x.getType() === 'number' && x % 1 === 0;
  }

  var temp = [];

  for (var i = 0; i < this.collection.length; i++) {
    if (isNumeric(this.collection[i])) {
      temp.push(this.collection[i]);
    }
  }

  if (temp.length > 0) {
    result = Math.min.apply(null, temp);
  }

  return result;
};

/***/ }),

/***/ "./src/core/orderBy.js":
/*!*****************************!*\
  !*** ./src/core/orderBy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.orderBy = function (property, fn) {
  if (!this.collection) {
    return null;
  }

  if (Object.prototype.toString.call(this.collection) !== '[object Array]') {
    return null;
  }

  if (this.collection.length === 0) {
    return new Enumerable([]);
  }

  var hasFn = fn && typeof fn === 'function';
  var hasProperty = property !== undefined && property !== null;
  var result = [];
  var tempArr = this.collection;
  var itemType = hasProperty ? tempArr[0][property].getType() : tempArr[0].getType();

  if (hasFn) {
    tempArr = [];

    for (var i = 0; i < this.collection.length; i++) {
      var v = fn(this.collection[i]);

      if (v) {
        tempArr.push(v);
      }
    }
  }

  if (itemType === 'string') {
    result = tempArr.sort(function (a, b) {
      var propA_Value = hasProperty ? a[property].toUpperCase() : a.toUpperCase();
      var propB_Value = hasProperty ? b[property].toUpperCase() : b.toUpperCase();

      if (propA_Value < propB_Value) {
        return -1;
      }

      if (propA_Value > propB_Value) {
        return 1;
      }

      return 0;
    });
  } else if (itemType === 'number') {
    result = tempArr.sort(function (a, b) {
      if (hasProperty) {
        return a[property] - b[property];
      }

      return a - b;
    });
  } else if (itemType === 'date') {
    result = tempArr.sort(function (a, b) {
      if (hasProperty) {
        return new Date(a[property]) - new Date(b[property]);
      }

      return new Date(a) - new Date(b);
    });
  } else if (itemType === 'boolean') {
    result = tempArr.sort(function (x, y) {
      // true values first
      if (x === y) {
        return 0;
      } else if (x) {
        return 1;
      }

      return -1;
    });
  } else if (itemType === 'array') {
    // not supported
    result = this.collection;
  } else if (itemType === 'object') {
    // not supported
    result = this.collection;
  }

  return result.asEnumerable();
};

/***/ }),

/***/ "./src/core/orderByDescending.js":
/*!***************************************!*\
  !*** ./src/core/orderByDescending.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.orderByDescending = function (property, fn) {
  if (!this.collection) {
    return null;
  }

  if (Object.prototype.toString.call(this.collection) !== '[object Array]') {
    return null;
  }

  if (this.collection.length === 0) {
    return new Enumerable([]);
  }

  var hasFn = fn && typeof fn === 'function';
  var hasProperty = property !== undefined && property !== null;
  var result = [];
  var tempArr = this.collection;
  var itemType = hasProperty ? tempArr[0][property].getType() : tempArr[0].getType();

  if (hasFn) {
    tempArr = [];

    for (var i = 0; i < this.collection.length; i++) {
      var v = fn(this.collection[i]);

      if (v) {
        tempArr.push(v);
      }
    }
  }

  if (itemType === 'string') {
    result = tempArr.sort(function (a, b) {
      var propA_Value = hasProperty ? a[property].toUpperCase() : a.toUpperCase();
      var propB_Value = hasProperty ? b[property].toUpperCase() : b.toUpperCase();

      if (propA_Value < propB_Value) {
        return 1;
      }

      if (propA_Value > propB_Value) {
        return -1;
      }

      return 0;
    });
  } else if (itemType === 'number') {
    result = tempArr.sort(function (a, b) {
      if (hasProperty) {
        return b[property] - a[property];
      }

      return b - a;
    });
  } else if (itemType === 'date') {
    result = tempArr.sort(function (a, b) {
      if (hasProperty) {
        return new Date(b[property]) - new Date(a[property]);
      }

      return new Date(b) - new Date(a);
    });
  } else if (itemType === 'boolean') {
    result = tempArr.sort(function (x, y) {
      // true values first
      if (x === y) {
        return 0;
      } else if (x) {
        return -1;
      }

      return 1;
    });
  } else if (itemType === 'array') {
    // not supported
    result = this.collection;
  } else if (itemType === 'object') {
    // not supported
    result = this.collection;
  }

  return result.asEnumerable();
};

/***/ }),

/***/ "./src/core/select.js":
/*!****************************!*\
  !*** ./src/core/select.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.select = function (obj) {
  var results = [];

  function explicit(item, obj) {
    var _temp = {};

    if (obj.length === 1) {
      for (var p in item) {
        if (p === obj[0]) {
          _temp = item[p];
          break;
        }
      }
    } else {
      for (var x = 0; x < obj.length; x++) {
        var prop = obj[x];

        for (var _p in item) {
          if (_p === prop) {
            _temp[prop] = item[_p];
          }
        }
      }
    }

    results.push(_temp);
  }

  function funcEval(obj, i, item, col) {
    results.push(obj(i, item, col));
  }

  for (var i = 0; i < this.collection.length; i++) {
    var item = this.collection[i];

    if (obj !== null && obj !== undefined && obj.length > 0) {
      if (obj.getType() === 'function') {
        funcEval(obj, i, item, this.collection);
      } else {
        explicit(item, obj);
      }
    } else {
      results.push(item);
    }
  }

  return results.asEnumerable();
};

/***/ }),

/***/ "./src/core/shuffle.js":
/*!*****************************!*\
  !*** ./src/core/shuffle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.shuffle = function () {
  var currentIndex = this.collection.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this.collection[currentIndex];
    this.collection[currentIndex] = this.collection[randomIndex];
    this.collection[randomIndex] = temporaryValue;
  }

  return new Enumerable(this.collection);
};

/***/ }),

/***/ "./src/core/single.js":
/*!****************************!*\
  !*** ./src/core/single.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.single = function () {
  if (this.collection.length === 1) {
    return this.collection[0];
  }

  if (this.collection.length < 1) {
    throw new Error('sequence contains no elements');
  } else {
    throw new Error('collection contains more than one item');
  }
};

/***/ }),

/***/ "./src/core/singleOrDefault.js":
/*!*************************************!*\
  !*** ./src/core/singleOrDefault.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.singleOrDefault = function (fn) {
  var hasFn = fn !== null && fn !== undefined;
  var FnIsFunction = hasFn && typeof fn === 'function';

  if (this.collection.length === 1) {
    return this.collection[0];
  } else if (this.length > 1) {
    throw new Error('collection contains more than one item');
  }

  if (hasFn) {
    if (FnIsFunction) {
      return fn();
    }

    return fn;
  }

  return null;
};

/***/ }),

/***/ "./src/core/skip.js":
/*!**************************!*\
  !*** ./src/core/skip.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.skip = function (count) {
  var results = [];
  var hasItems = count > 0;
  var validSkipCount = count < this.collection.length;
  var canSkip = hasItems && validSkipCount;

  if (canSkip) {
    for (var i = 0; i < this.collection.length; i++) {
      if (i < count) {
        continue;
      }

      results.push(this.collection[i]);
    }
  } else {
    return this;
  }

  return results.asEnumerable();
};

/***/ }),

/***/ "./src/core/skipWhile.js":
/*!*******************************!*\
  !*** ./src/core/skipWhile.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.skipWhile = function (fn) {
  var results = [];
  var hasFn = fn !== null && fn !== undefined;
  var FnIsFunction = hasFn && typeof fn === 'function';
  var canSkip = hasFn && FnIsFunction;
  var hasItems = this.collection.length > 0;

  if (!hasFn || !FnIsFunction) {
    return this;
  }

  if (canSkip && hasItems) {
    var end = this.collection.length;

    for (var i = 0; i < this.collection.length; i++) {
      var item = this.collection[i];

      var _callbackResult = fn(i, item, this.collection);

      if (_callbackResult === true) {
        continue;
      } else {
        return this.collection.slice(i, end).asEnumerable();
      }
    }
  }

  return results.asEnumerable();
};

/***/ }),

/***/ "./src/core/take.js":
/*!**************************!*\
  !*** ./src/core/take.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.take = function (count) {
  if (this.collection.length === 0) {
    return this;
  }

  if (this.collection.length > count) {
    var results = [];

    for (var i = 0; i < count; i++) {
      results.push(this.collection[i]);
    }

    return results.asEnumerable();
  }

  return this;
};

/***/ }),

/***/ "./src/core/takeWhile.js":
/*!*******************************!*\
  !*** ./src/core/takeWhile.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.takeWhile = function (fn) {
  var results = [];
  var hasFn = fn !== null && fn !== undefined && typeof fn === 'function';

  if (!hasFn) {
    return this;
  }

  for (var i = 0; i < this.collection.length; i++) {
    var item = this.collection[i];

    var _callbackResult = fn(i, item, this.collection);

    if (_callbackResult === true) {
      results.push(item);
    } else {
      break;
    }
  }

  return results.asEnumerable();
};

/***/ }),

/***/ "./src/core/toArray.js":
/*!*****************************!*\
  !*** ./src/core/toArray.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.toArray = function () {
  return this.collection;
};

/***/ }),

/***/ "./src/core/where.js":
/*!***************************!*\
  !*** ./src/core/where.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Enumerable.fn.where = function (fn) {
  var results = [];
  var hasFn = fn !== null && fn !== undefined;
  var FnIsFunction = hasFn && typeof fn === 'function';

  for (var i = 0; i < this.collection.length; i++) {
    var item = this.collection[i];

    if (hasFn && FnIsFunction && fn(i, item, this.collection)) {
      results.push(item);
    }
  }

  return results.asEnumerable();
};

/***/ }),

/***/ "./src/dependencies.js":
/*!*****************************!*\
  !*** ./src/dependencies.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./extensions/array */ "./src/extensions/array.js");

__webpack_require__(/*! ./extensions/object */ "./src/extensions/object.js");

__webpack_require__(/*! ./core/toArray */ "./src/core/toArray.js");

__webpack_require__(/*! ./core/any */ "./src/core/any.js");

__webpack_require__(/*! ./core/count */ "./src/core/count.js");

__webpack_require__(/*! ./core/first */ "./src/core/first.js");

__webpack_require__(/*! ./core/firstOrDefault */ "./src/core/firstOrDefault.js");

__webpack_require__(/*! ./core/dropFirst */ "./src/core/dropFirst.js");

__webpack_require__(/*! ./core/dropLast */ "./src/core/dropLast.js");

__webpack_require__(/*! ./core/last */ "./src/core/last.js");

__webpack_require__(/*! ./core/lastOrDefault */ "./src/core/lastOrDefault.js");

__webpack_require__(/*! ./core/shuffle */ "./src/core/shuffle.js");

__webpack_require__(/*! ./core/except */ "./src/core/except.js");

__webpack_require__(/*! ./core/maximum */ "./src/core/maximum.js");

__webpack_require__(/*! ./core/minimum */ "./src/core/minimum.js");

__webpack_require__(/*! ./core/orderBy */ "./src/core/orderBy.js");

__webpack_require__(/*! ./core/orderByDescending */ "./src/core/orderByDescending.js");

__webpack_require__(/*! ./core/select */ "./src/core/select.js");

__webpack_require__(/*! ./core/single */ "./src/core/single.js");

__webpack_require__(/*! ./core/singleOrDefault */ "./src/core/singleOrDefault.js");

__webpack_require__(/*! ./core/skip */ "./src/core/skip.js");

__webpack_require__(/*! ./core/skipWhile */ "./src/core/skipWhile.js");

__webpack_require__(/*! ./core/take */ "./src/core/take.js");

__webpack_require__(/*! ./core/takeWhile */ "./src/core/takeWhile.js");

__webpack_require__(/*! ./core/where */ "./src/core/where.js");

/***/ }),

/***/ "./src/enumerable.js":
/*!***************************!*\
  !*** ./src/enumerable.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function Enumerable(_array) {
  if (_array) {
    this.collection = _array;
  } else {
    this.collection = [];
  }
}

Enumerable.fn = Enumerable.prototype;

Enumerable.fn.toString = function () {
  var separator = '';
  var result = '';

  for (var i = 0; i < this.collection.length; i++) {
    result += separator + this.collection[i];
  }

  return result;
};

Enumerable.Range = function (start, count) {
  var result = [];

  for (var i = 0; i < count; i++) {
    result[i] = start + i;
  }

  return result.asEnumerable();
};

module.exports = Enumerable;

__webpack_require__(/*! ./dependencies */ "./src/dependencies.js");

/***/ }),

/***/ "./src/extensions/array.js":
/*!*********************************!*\
  !*** ./src/extensions/array.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Enumerable = __webpack_require__(/*! ../enumerable */ "./src/enumerable.js");

Array.prototype.asEnumerable = function () {
  var e = new Enumerable(this);
  return e;
};

/***/ }),

/***/ "./src/extensions/object.js":
/*!**********************************!*\
  !*** ./src/extensions/object.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.prototype.getType = function () {
  var typeString = Object.prototype.toString.call(this);

  if (typeString === '[object Date]') {
    return 'date';
  } else if (typeString === '[object String]') {
    return 'string';
  } else if (typeString === '[object Number]') {
    return 'number';
  } else if (typeString === '[object Boolean]') {
    return 'boolean';
  } else if (typeString === '[object Array]') {
    return 'array';
  } else if (typeString === '[object Object]') {
    return 'object';
  } else if (typeof this === 'function') {
    return 'function';
  }

  return typeString;
};

Object.prototype.isEqual = function (object2, order_matters) {
  var keys1 = Object.keys(this),
      keys2 = Object.keys(object2),
      i,
      key; // Test 1: Same number of elements

  if (keys1.length !== keys2.length) {
    return false;
  } // If order doesn't matter isEqual({a:2, b:1}, {b:1, a:2}) should return true.
  // keys1 = Object.keys({a:2, b:1}) = ["a","b"];
  // keys2 = Object.keys({b:1, a:2}) = ["b","a"];
  // This is why we are sorting keys1 and keys2.


  if (!order_matters) {
    keys1.sort();
    keys2.sort();
  } // Test 2: Same keys


  for (i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  } // Test 3: Values


  for (i = 0; i < keys1.length; i++) {
    key = keys1[i];

    if (this[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnVtZXJhYmxlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS9hbnkuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL2NvdW50LmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS9kcm9wRmlyc3QuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL2Ryb3BMYXN0LmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS9leGNlcHQuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL2ZpcnN0LmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS9maXJzdE9yRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvbGFzdC5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvbGFzdE9yRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvbWF4aW11bS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvbWluaW11bS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvb3JkZXJCeS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvb3JkZXJCeURlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvc2luZ2xlLmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS9zaW5nbGVPckRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL3NraXAuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9jb3JlL3NraXBXaGlsZS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvdGFrZS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2NvcmUvdGFrZVdoaWxlLmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS90b0FycmF5LmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvY29yZS93aGVyZS5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2RlcGVuZGVuY2llcy5qcyIsIndlYnBhY2s6Ly9lbnVtZXJhYmxlLy4vc3JjL2VudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vZW51bWVyYWJsZS8uL3NyYy9leHRlbnNpb25zL2FycmF5LmpzIiwid2VicGFjazovL2VudW1lcmFibGUvLi9zcmMvZXh0ZW5zaW9ucy9vYmplY3QuanMiXSwibmFtZXMiOlsiRW51bWVyYWJsZSIsInJlcXVpcmUiLCJmbiIsImFueSIsImhhc0ZuIiwidW5kZWZpbmVkIiwiRm5Jc0Z1bmN0aW9uIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsImkiLCJpdGVtIiwiY291bnQiLCJyZXN1bHRzIiwicHVzaCIsImRyb3BGaXJzdCIsInNwbGljZSIsImRyb3BMYXN0IiwiZXhjZXB0IiwiYXJyIiwicmVzdWx0IiwiY29udGFpbnMiLCJ4IiwiaXRlbTIiLCJnZXRUeXBlIiwiaXNFcXVhbCIsImFzRW51bWVyYWJsZSIsImZpcnN0IiwiRXJyb3IiLCJmaXJzdE9yRGVmYXVsdCIsImxhc3QiLCJsYXN0T3JEZWZhdWx0IiwibWF4aW11bSIsImlzTnVtZXJpYyIsInRlbXAiLCJNYXRoIiwibWF4IiwiYXBwbHkiLCJtaW5pbXVtIiwibWluIiwib3JkZXJCeSIsInByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaGFzUHJvcGVydHkiLCJ0ZW1wQXJyIiwiaXRlbVR5cGUiLCJ2Iiwic29ydCIsImEiLCJiIiwicHJvcEFfVmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInByb3BCX1ZhbHVlIiwiRGF0ZSIsInkiLCJvcmRlckJ5RGVzY2VuZGluZyIsInNlbGVjdCIsIm9iaiIsImV4cGxpY2l0IiwiX3RlbXAiLCJwIiwicHJvcCIsIl9wIiwiZnVuY0V2YWwiLCJjb2wiLCJzaHVmZmxlIiwiY3VycmVudEluZGV4IiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsImZsb29yIiwicmFuZG9tIiwic2luZ2xlIiwic2luZ2xlT3JEZWZhdWx0Iiwic2tpcCIsImhhc0l0ZW1zIiwidmFsaWRTa2lwQ291bnQiLCJjYW5Ta2lwIiwic2tpcFdoaWxlIiwiZW5kIiwiX2NhbGxiYWNrUmVzdWx0Iiwic2xpY2UiLCJ0YWtlIiwidGFrZVdoaWxlIiwidG9BcnJheSIsIndoZXJlIiwiX2FycmF5Iiwic2VwYXJhdG9yIiwiUmFuZ2UiLCJzdGFydCIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImUiLCJ0eXBlU3RyaW5nIiwib2JqZWN0MiIsIm9yZGVyX21hdHRlcnMiLCJrZXlzMSIsImtleXMiLCJrZXlzMiIsImtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TyxLQUFQO0FBQ0QsR0FUSCxDQVdFO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFHLENBQUN5RixhQUFKLEVBQ0E7QUFDRUMsU0FBSyxDQUFDakQsSUFBTjtBQUNBbUQsU0FBSyxDQUFDbkQsSUFBTjtBQUNELEdBbkJILENBcUJFOzs7QUFDQSxPQUFJeEMsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHeUYsS0FBSyxDQUFDMUYsTUFBckIsRUFBNkJDLENBQUMsRUFBOUIsRUFDQTtBQUNFLFFBQUd5RixLQUFLLENBQUN6RixDQUFELENBQUwsS0FBYTJGLEtBQUssQ0FBQzNGLENBQUQsQ0FBckIsRUFDQTtBQUNFLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0E1QkgsQ0E4QkU7OztBQUNBLE9BQUlBLENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBR3lGLEtBQUssQ0FBQzFGLE1BQXJCLEVBQTZCQyxDQUFDLEVBQTlCLEVBQ0E7QUFDRTRGLE9BQUcsR0FBR0gsS0FBSyxDQUFDekYsQ0FBRCxDQUFYOztBQUNBLFFBQUcsS0FBSzRGLEdBQUwsTUFBY0wsT0FBTyxDQUFDSyxHQUFELENBQXhCLEVBQ0E7QUFDRSxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNELENBMUNELEMiLCJmaWxlIjoiZW51bWVyYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZW51bWVyYWJsZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlbnVtZXJhYmxlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVudW1lcmFibGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW51bWVyYWJsZS5qc1wiKTtcbiIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5hbnkgPSBmdW5jdGlvbihmbilcclxue1xyXG4gICAgdmFyIGhhc0ZuID0gKGZuICE9PSBudWxsICYmIGZuICE9PSB1bmRlZmluZWQpO1xyXG4gICAgdmFyIEZuSXNGdW5jdGlvbiA9IChoYXNGbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpO1xyXG5cclxuICAgIGlmKCFoYXNGbilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzICE9PSBudWxsICYmIHRoaXMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jb2xsZWN0aW9uW2ldO1xyXG5cclxuICAgICAgICBpZihpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaGFzRm4gJiYgRm5Jc0Z1bmN0aW9uICYmIGZuKGksIGl0ZW0sIHRoaXMuY29sbGVjdGlvbikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5jb3VudCA9IGZ1bmN0aW9uKGZuKVxyXG57XHJcbiAgICB2YXIgaGFzRm4gPSAoZm4gIT09IG51bGwgJiYgZm4gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpO1xyXG5cclxuICAgIGlmKGhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIHZhciByZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY29sbGVjdGlvbltpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGZuKGksIGl0ZW0sIHRoaXMuY29sbGVjdGlvbikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5kcm9wRmlyc3QgPSBmdW5jdGlvbihjb3VudClcclxue1xyXG4gICAgaWYoY291bnQgPD0gMClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUodGhpcy5jb2xsZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID4gY291bnQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKHRoaXMuY29sbGVjdGlvbi5zcGxpY2UodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCAtIGNvdW50LCBjb3VudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZSgpO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5kcm9wTGFzdCA9IGZ1bmN0aW9uKGNvdW50KVxyXG57XHJcbiAgICBpZihjb3VudCA8PSAwKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW51bWVyYWJsZSh0aGlzLmNvbGxlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPiBjb3VudClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUodGhpcy5jb2xsZWN0aW9uLnNwbGljZSgwLCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoIC0gY291bnQpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRW51bWVyYWJsZSgpO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5leGNlcHQgPSBmdW5jdGlvbihhcnIsIGZuKVxyXG57XHJcbiAgICBpZih0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoIDw9IDApXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKHRoaXMuY29sbGVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNvbGxlY3Rpb25baV07XHJcblxyXG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgYXJyLmxlbmd0aDsgeCsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0yID0gYXJyW3hdO1xyXG5cclxuICAgICAgICAgICAgaWYoZm4gJiYgZm4uZ2V0VHlwZSgpID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihmbihpdGVtLCBpdGVtMikgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbTIuZ2V0VHlwZSgpID09PSAnb2JqZWN0JyAmJiBpdGVtLmdldFR5cGUoKSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbTIuaXNFcXVhbChpdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0yID09PSBpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvbnRhaW5zID09PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmFzRW51bWVyYWJsZSgpO1xyXG59O1xyXG4iLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4uZmlyc3QgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGlmKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25bMF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50cycpO1xyXG59O1xyXG4iLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4uZmlyc3RPckRlZmF1bHQgPSBmdW5jdGlvbihmbilcclxue1xyXG4gICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvblswXTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmbiAhPT0gbnVsbCAmJiBmbiAhPT0gdW5kZWZpbmVkKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5sYXN0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBpZih0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID4gMClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uW3RoaXMuY29sbGVjdGlvbi5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzJyk7XHJcbn07IiwidmFyIEVudW1lcmFibGUgPSByZXF1aXJlKCcuLi9lbnVtZXJhYmxlJyk7XHJcblxyXG5FbnVtZXJhYmxlLmZuLmxhc3RPckRlZmF1bHQgPSBmdW5jdGlvbihmbilcclxue1xyXG4gICAgdmFyIGhhc0ZuID0gKGZuICE9PSBudWxsICYmIGZuICE9PSB1bmRlZmluZWQpO1xyXG4gICAgdmFyIEZuSXNGdW5jdGlvbiA9IChoYXNGbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpO1xyXG5cclxuICAgIGlmKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25bdGhpcy5jb2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIGlmKEZuSXNGdW5jdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5tYXhpbXVtID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBpc051bWVyaWMoeClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHggIT09IG51bGwgJiYgeC5nZXRUeXBlKCkgPT09ICdudW1iZXInKSAmJiAoeCAlIDEgPT09IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0ZW1wID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBpZihpc051bWVyaWModGhpcy5jb2xsZWN0aW9uW2ldKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRlbXAucHVzaCh0aGlzLmNvbGxlY3Rpb25baV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZih0ZW1wLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgICAgcmVzdWx0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgdGVtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4ubWluaW11bSA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKHgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh4ICE9PSBudWxsICYmIHguZ2V0VHlwZSgpID09PSAnbnVtYmVyJykgJiYgKHggJSAxID09PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGVtcCA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXNOdW1lcmljKHRoaXMuY29sbGVjdGlvbltpXSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5jb2xsZWN0aW9uW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGVtcC5sZW5ndGggPiAwKVxyXG4gICAge1xyXG4gICAgICAgIHJlc3VsdCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHRlbXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07IiwidmFyIEVudW1lcmFibGUgPSByZXF1aXJlKCcuLi9lbnVtZXJhYmxlJyk7XHJcblxyXG5FbnVtZXJhYmxlLmZuLm9yZGVyQnkgPSBmdW5jdGlvbihwcm9wZXJ0eSwgZm4pXHJcbntcclxuICAgIGlmKCF0aGlzLmNvbGxlY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMuY29sbGVjdGlvbikgIT09ICdbb2JqZWN0IEFycmF5XScpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoYXNGbiA9IChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpO1xyXG4gICAgdmFyIGhhc1Byb3BlcnR5ID0gcHJvcGVydHkgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eSAhPT0gbnVsbDtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgdmFyIHRlbXBBcnIgPSB0aGlzLmNvbGxlY3Rpb247XHJcblxyXG4gICAgdmFyIGl0ZW1UeXBlID0gKGhhc1Byb3BlcnR5KSA/IHRlbXBBcnJbMF1bcHJvcGVydHldLmdldFR5cGUoKSA6IHRlbXBBcnJbMF0uZ2V0VHlwZSgpO1xyXG5cclxuICAgIGlmKGhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIHRlbXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHYgPSBmbih0aGlzLmNvbGxlY3Rpb25baV0pO1xyXG5cclxuICAgICAgICAgICAgaWYodilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGl0ZW1UeXBlID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oYSwgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wQV9WYWx1ZSA9IChoYXNQcm9wZXJ0eSkgPyBhW3Byb3BlcnR5XS50b1VwcGVyQ2FzZSgpIDogYS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgcHJvcEJfVmFsdWUgPSAoaGFzUHJvcGVydHkpID8gYltwcm9wZXJ0eV0udG9VcHBlckNhc2UoKSA6IGIudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHByb3BBX1ZhbHVlIDwgcHJvcEJfVmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocHJvcEFfVmFsdWUgPiBwcm9wQl9WYWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpdGVtVHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGVtcEFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihoYXNQcm9wZXJ0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbcHJvcGVydHldIC0gYltwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdkYXRlJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oYSwgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGhhc1Byb3BlcnR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYVtwcm9wZXJ0eV0pIC0gbmV3IERhdGUoYltwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYSkgLSBuZXcgRGF0ZShiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdib29sZWFuJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oeCwgeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRydWUgdmFsdWVzIGZpcnN0XHJcbiAgICAgICAgICAgIGlmKHggPT09IHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoeClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdhcnJheScpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZFxyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY29sbGVjdGlvbjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdvYmplY3QnKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmNvbGxlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5hc0VudW1lcmFibGUoKTtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4ub3JkZXJCeURlc2NlbmRpbmcgPSBmdW5jdGlvbihwcm9wZXJ0eSwgZm4pXHJcbntcclxuICAgIGlmKCF0aGlzLmNvbGxlY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMuY29sbGVjdGlvbikgIT09ICdbb2JqZWN0IEFycmF5XScpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVudW1lcmFibGUoW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoYXNGbiA9IChmbiAmJiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpO1xyXG4gICAgdmFyIGhhc1Byb3BlcnR5ID0gcHJvcGVydHkgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eSAhPT0gbnVsbDtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgdmFyIHRlbXBBcnIgPSB0aGlzLmNvbGxlY3Rpb247XHJcblxyXG4gICAgdmFyIGl0ZW1UeXBlID0gKGhhc1Byb3BlcnR5KSA/IHRlbXBBcnJbMF1bcHJvcGVydHldLmdldFR5cGUoKSA6IHRlbXBBcnJbMF0uZ2V0VHlwZSgpO1xyXG5cclxuICAgIGlmKGhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIHRlbXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHYgPSBmbih0aGlzLmNvbGxlY3Rpb25baV0pO1xyXG5cclxuICAgICAgICAgICAgaWYodilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGl0ZW1UeXBlID09PSAnc3RyaW5nJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oYSwgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wQV9WYWx1ZSA9IChoYXNQcm9wZXJ0eSkgPyBhW3Byb3BlcnR5XS50b1VwcGVyQ2FzZSgpIDogYS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgcHJvcEJfVmFsdWUgPSAoaGFzUHJvcGVydHkpID8gYltwcm9wZXJ0eV0udG9VcHBlckNhc2UoKSA6IGIudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHByb3BBX1ZhbHVlIDwgcHJvcEJfVmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihwcm9wQV9WYWx1ZSA+IHByb3BCX1ZhbHVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpdGVtVHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICB7XHJcbiAgICAgICAgcmVzdWx0ID0gdGVtcEFyci5zb3J0KGZ1bmN0aW9uKGEsIGIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihoYXNQcm9wZXJ0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbcHJvcGVydHldIC0gYVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBiIC0gYTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdkYXRlJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oYSwgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGhhc1Byb3BlcnR5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYltwcm9wZXJ0eV0pIC0gbmV3IERhdGUoYVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYikgLSBuZXcgRGF0ZShhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdib29sZWFuJylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24oeCwgeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRydWUgdmFsdWVzIGZpcnN0XHJcbiAgICAgICAgICAgIGlmKHggPT09IHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoeClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdhcnJheScpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZFxyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY29sbGVjdGlvbjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaXRlbVR5cGUgPT09ICdvYmplY3QnKVxyXG4gICAge1xyXG4gICAgICAgIC8vIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICByZXN1bHQgPSB0aGlzLmNvbGxlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdC5hc0VudW1lcmFibGUoKTtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4uc2VsZWN0ID0gZnVuY3Rpb24ob2JqKVxyXG57XHJcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGV4cGxpY2l0KGl0ZW0sIG9iailcclxuICAgIHtcclxuICAgICAgICB2YXIgX3RlbXAgPSB7fTtcclxuXHJcbiAgICAgICAgaWYob2JqLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcCBpbiBpdGVtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwID09PSBvYmpbMF0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RlbXAgPSBpdGVtW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgeCA9IDA7IHggPCBvYmoubGVuZ3RoOyB4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gb2JqW3hdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgX3AgaW4gaXRlbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihfcCA9PT0gcHJvcClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90ZW1wW3Byb3BdID0gaXRlbVtfcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goX3RlbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZ1bmNFdmFsKG9iaiwgaSwgaXRlbSwgY29sKVxyXG4gICAge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChvYmooaSwgaXRlbSwgY29sKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY29sbGVjdGlvbltpXTtcclxuXHJcbiAgICAgICAgaWYob2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iai5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYob2JqLmdldFR5cGUoKSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnVuY0V2YWwob2JqLCBpLCBpdGVtLCB0aGlzLmNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXhwbGljaXQoaXRlbSwgb2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzLmFzRW51bWVyYWJsZSgpO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5zaHVmZmxlID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDtcclxuICAgIHZhciB0ZW1wb3JhcnlWYWx1ZTtcclxuICAgIHZhciByYW5kb21JbmRleDtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9PSAwKVxyXG4gICAge1xyXG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XHJcbiAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xyXG5cclxuICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLmNvbGxlY3Rpb25bY3VycmVudEluZGV4XTtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uW2N1cnJlbnRJbmRleF0gPSB0aGlzLmNvbGxlY3Rpb25bcmFuZG9tSW5kZXhdO1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25bcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhYmxlKHRoaXMuY29sbGVjdGlvbik7XHJcbn07IiwidmFyIEVudW1lcmFibGUgPSByZXF1aXJlKCcuLi9lbnVtZXJhYmxlJyk7XHJcblxyXG5FbnVtZXJhYmxlLmZuLnNpbmdsZSA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPCAxKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc2VxdWVuY2UgY29udGFpbnMgbm8gZWxlbWVudHMnKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbGxlY3Rpb24gY29udGFpbnMgbW9yZSB0aGFuIG9uZSBpdGVtJyk7XHJcbiAgICB9XHJcbn07IiwidmFyIEVudW1lcmFibGUgPSByZXF1aXJlKCcuLi9lbnVtZXJhYmxlJyk7XHJcblxyXG5FbnVtZXJhYmxlLmZuLnNpbmdsZU9yRGVmYXVsdCA9IGZ1bmN0aW9uKGZuKVxyXG57XHJcbiAgICB2YXIgaGFzRm4gPSAoZm4gIT09IG51bGwgJiYgZm4gIT09IHVuZGVmaW5lZCk7XHJcbiAgICB2YXIgRm5Jc0Z1bmN0aW9uID0gKGhhc0ZuICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyk7XHJcblxyXG4gICAgaWYodGhpcy5jb2xsZWN0aW9uLmxlbmd0aCA9PT0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uWzBdO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmxlbmd0aCA+IDEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb2xsZWN0aW9uIGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgaXRlbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIGlmKEZuSXNGdW5jdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5za2lwID0gZnVuY3Rpb24oY291bnQpXHJcbntcclxuICAgIHZhciByZXN1bHRzID0gW107XHJcblxyXG4gICAgdmFyIGhhc0l0ZW1zID0gKGNvdW50ID4gMCk7XHJcbiAgICB2YXIgdmFsaWRTa2lwQ291bnQgPSAoY291bnQgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoKTtcclxuXHJcbiAgICB2YXIgY2FuU2tpcCA9IChoYXNJdGVtcyAmJiB2YWxpZFNraXBDb3VudCk7XHJcblxyXG4gICAgaWYoY2FuU2tpcClcclxuICAgIHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaSA8IGNvdW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuY29sbGVjdGlvbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzLmFzRW51bWVyYWJsZSgpO1xyXG59OyIsInZhciBFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vZW51bWVyYWJsZScpO1xyXG5cclxuRW51bWVyYWJsZS5mbi5za2lwV2hpbGUgPSBmdW5jdGlvbihmbilcclxue1xyXG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcclxuICAgIHZhciBoYXNGbiA9IChmbiAhPT0gbnVsbCAmJiBmbiAhPT0gdW5kZWZpbmVkKTtcclxuICAgIHZhciBGbklzRnVuY3Rpb24gPSAoaGFzRm4gJiYgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKTtcclxuICAgIHZhciBjYW5Ta2lwID0gKGhhc0ZuICYmIEZuSXNGdW5jdGlvbik7XHJcbiAgICB2YXIgaGFzSXRlbXMgPSB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID4gMDtcclxuXHJcbiAgICBpZighaGFzRm4gfHwgIUZuSXNGdW5jdGlvbilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpZihjYW5Ta2lwICYmIGhhc0l0ZW1zKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBlbmQgPSB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNvbGxlY3Rpb25baV07XHJcbiAgICAgICAgICAgIHZhciBfY2FsbGJhY2tSZXN1bHQgPSBmbihpLCBpdGVtLCB0aGlzLmNvbGxlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYoX2NhbGxiYWNrUmVzdWx0ID09PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24uc2xpY2UoaSwgZW5kKS5hc0VudW1lcmFibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5hc0VudW1lcmFibGUoKTtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4udGFrZSA9IGZ1bmN0aW9uKGNvdW50KVxyXG57XHJcbiAgICBpZih0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPiBjb3VudClcclxuICAgIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmNvbGxlY3Rpb25baV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuYXNFbnVtZXJhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn07IiwidmFyIEVudW1lcmFibGUgPSByZXF1aXJlKCcuLi9lbnVtZXJhYmxlJyk7XHJcblxyXG5FbnVtZXJhYmxlLmZuLnRha2VXaGlsZSA9IGZ1bmN0aW9uKGZuKVxyXG57XHJcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIHZhciBoYXNGbiA9IChmbiAhPT0gbnVsbCAmJiBmbiAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyk7XHJcblxyXG4gICAgaWYoIWhhc0ZuKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNvbGxlY3Rpb25baV07XHJcblxyXG4gICAgICAgIHZhciBfY2FsbGJhY2tSZXN1bHQgPSBmbihpLCBpdGVtLCB0aGlzLmNvbGxlY3Rpb24pO1xyXG5cclxuICAgICAgICBpZihfY2FsbGJhY2tSZXN1bHQgPT09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5hc0VudW1lcmFibGUoKTtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4udG9BcnJheSA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbjtcclxufTsiLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkVudW1lcmFibGUuZm4ud2hlcmUgPSBmdW5jdGlvbihmbilcclxue1xyXG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICB2YXIgaGFzRm4gPSAoZm4gIT09IG51bGwgJiYgZm4gIT09IHVuZGVmaW5lZCk7XHJcbiAgICB2YXIgRm5Jc0Z1bmN0aW9uID0gKGhhc0ZuICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyk7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY29sbGVjdGlvbltpXTtcclxuXHJcbiAgICAgICAgaWYoaGFzRm4gJiYgRm5Jc0Z1bmN0aW9uICYmIGZuKGksIGl0ZW0sIHRoaXMuY29sbGVjdGlvbikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzLmFzRW51bWVyYWJsZSgpO1xyXG59OyIsInJlcXVpcmUoJy4vZXh0ZW5zaW9ucy9hcnJheScpO1xyXG5yZXF1aXJlKCcuL2V4dGVuc2lvbnMvb2JqZWN0Jyk7XHJcbnJlcXVpcmUoJy4vY29yZS90b0FycmF5Jyk7XHJcbnJlcXVpcmUoJy4vY29yZS9hbnknKTtcclxucmVxdWlyZSgnLi9jb3JlL2NvdW50Jyk7XHJcbnJlcXVpcmUoJy4vY29yZS9maXJzdCcpO1xyXG5yZXF1aXJlKCcuL2NvcmUvZmlyc3RPckRlZmF1bHQnKTtcclxucmVxdWlyZSgnLi9jb3JlL2Ryb3BGaXJzdCcpO1xyXG5yZXF1aXJlKCcuL2NvcmUvZHJvcExhc3QnKTtcclxucmVxdWlyZSgnLi9jb3JlL2xhc3QnKTtcclxucmVxdWlyZSgnLi9jb3JlL2xhc3RPckRlZmF1bHQnKTtcclxucmVxdWlyZSgnLi9jb3JlL3NodWZmbGUnKTtcclxucmVxdWlyZSgnLi9jb3JlL2V4Y2VwdCcpO1xyXG5yZXF1aXJlKCcuL2NvcmUvbWF4aW11bScpO1xyXG5yZXF1aXJlKCcuL2NvcmUvbWluaW11bScpO1xyXG5yZXF1aXJlKCcuL2NvcmUvb3JkZXJCeScpO1xyXG5yZXF1aXJlKCcuL2NvcmUvb3JkZXJCeURlc2NlbmRpbmcnKTtcclxucmVxdWlyZSgnLi9jb3JlL3NlbGVjdCcpO1xyXG5yZXF1aXJlKCcuL2NvcmUvc2luZ2xlJyk7XHJcbnJlcXVpcmUoJy4vY29yZS9zaW5nbGVPckRlZmF1bHQnKTtcclxucmVxdWlyZSgnLi9jb3JlL3NraXAnKTtcclxucmVxdWlyZSgnLi9jb3JlL3NraXBXaGlsZScpO1xyXG5yZXF1aXJlKCcuL2NvcmUvdGFrZScpO1xyXG5yZXF1aXJlKCcuL2NvcmUvdGFrZVdoaWxlJyk7XHJcbnJlcXVpcmUoJy4vY29yZS93aGVyZScpOyIsImZ1bmN0aW9uIEVudW1lcmFibGUoX2FycmF5KVxyXG57XHJcbiAgICBpZihfYXJyYXkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gX2FycmF5O1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5FbnVtZXJhYmxlLmZuID0gRW51bWVyYWJsZS5wcm90b3R5cGU7XHJcblxyXG5FbnVtZXJhYmxlLmZuLnRvU3RyaW5nID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgc2VwYXJhdG9yID0gJyc7XHJcbiAgICB2YXIgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICByZXN1bHQgKz0gc2VwYXJhdG9yICsgdGhpcy5jb2xsZWN0aW9uW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5FbnVtZXJhYmxlLlJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIGNvdW50KVxyXG57XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgcmVzdWx0W2ldID0gc3RhcnQgKyBpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQuYXNFbnVtZXJhYmxlKCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVudW1lcmFibGU7XHJcblxyXG5yZXF1aXJlKCcuL2RlcGVuZGVuY2llcycpO1xyXG4iLCJ2YXIgRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2VudW1lcmFibGUnKTtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5hc0VudW1lcmFibGUgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICB2YXIgZSA9IG5ldyBFbnVtZXJhYmxlKHRoaXMpO1xyXG5cclxuICAgIHJldHVybiBlO1xyXG59OyIsIk9iamVjdC5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpXHJcbntcclxuICB2YXIgdHlwZVN0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcclxuXHJcbiAgaWYodHlwZVN0cmluZyA9PT0gJ1tvYmplY3QgRGF0ZV0nKVxyXG4gIHtcclxuICAgIHJldHVybiAnZGF0ZSc7XHJcbiAgfVxyXG4gIGVsc2UgaWYodHlwZVN0cmluZyA9PT0gJ1tvYmplY3QgU3RyaW5nXScpXHJcbiAge1xyXG4gICAgcmV0dXJuICdzdHJpbmcnO1xyXG4gIH1cclxuICBlbHNlIGlmKHR5cGVTdHJpbmcgPT09ICdbb2JqZWN0IE51bWJlcl0nKVxyXG4gIHtcclxuICAgIHJldHVybiAnbnVtYmVyJztcclxuICB9XHJcbiAgZWxzZSBpZih0eXBlU3RyaW5nID09PSAnW29iamVjdCBCb29sZWFuXScpXHJcbiAge1xyXG4gICAgcmV0dXJuICdib29sZWFuJztcclxuICB9XHJcbiAgZWxzZSBpZih0eXBlU3RyaW5nID09PSAnW29iamVjdCBBcnJheV0nKVxyXG4gIHtcclxuICAgIHJldHVybiAnYXJyYXknO1xyXG4gIH1cclxuICBlbHNlIGlmKHR5cGVTdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nKVxyXG4gIHtcclxuICAgIHJldHVybiAnb2JqZWN0JztcclxuICB9XHJcbiAgZWxzZSBpZih0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJylcclxuICB7XHJcbiAgICByZXR1cm4gJ2Z1bmN0aW9uJztcclxuICB9XHJcblxyXG4gIHJldHVybiB0eXBlU3RyaW5nO1xyXG59O1xyXG5cclxuT2JqZWN0LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24gKG9iamVjdDIsIG9yZGVyX21hdHRlcnMpXHJcbntcclxuICB2YXIga2V5czEgPSBPYmplY3Qua2V5cyh0aGlzKSxcclxuICAgIGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0MiksXHJcbiAgICBpLCBrZXk7XHJcblxyXG4gIC8vIFRlc3QgMTogU2FtZSBudW1iZXIgb2YgZWxlbWVudHNcclxuICBpZihrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aClcclxuICB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBJZiBvcmRlciBkb2Vzbid0IG1hdHRlciBpc0VxdWFsKHthOjIsIGI6MX0sIHtiOjEsIGE6Mn0pIHNob3VsZCByZXR1cm4gdHJ1ZS5cclxuICAvLyBrZXlzMSA9IE9iamVjdC5rZXlzKHthOjIsIGI6MX0pID0gW1wiYVwiLFwiYlwiXTtcclxuICAvLyBrZXlzMiA9IE9iamVjdC5rZXlzKHtiOjEsIGE6Mn0pID0gW1wiYlwiLFwiYVwiXTtcclxuICAvLyBUaGlzIGlzIHdoeSB3ZSBhcmUgc29ydGluZyBrZXlzMSBhbmQga2V5czIuXHJcbiAgaWYoIW9yZGVyX21hdHRlcnMpXHJcbiAge1xyXG4gICAga2V5czEuc29ydCgpO1xyXG4gICAga2V5czIuc29ydCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGVzdCAyOiBTYW1lIGtleXNcclxuICBmb3IoaSA9IDA7IGkgPCBrZXlzMS5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICBpZihrZXlzMVtpXSAhPT0ga2V5czJbaV0pXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRlc3QgMzogVmFsdWVzXHJcbiAgZm9yKGkgPSAwOyBpIDwga2V5czEubGVuZ3RoOyBpKyspXHJcbiAge1xyXG4gICAga2V5ID0ga2V5czFbaV07XHJcbiAgICBpZih0aGlzW2tleV0gIT09IG9iamVjdDJba2V5XSlcclxuICAgIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==