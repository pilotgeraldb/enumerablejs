[![Bower version](https://badge.fury.io/bo/enumerablejs.svg)](https://badge.fury.io/bo/enumerablejs)
[![npm version](https://badge.fury.io/js/asenumerable.svg)](https://badge.fury.io/js/asenumerable)
[![Build Status](https://travis-ci.org/ralphy15/enumerablejs.svg?branch=master)](https://travis-ci.org/ralphy15/enumerablejs)

# enumerablejs 

a JavaScript library that provides linq functions on native JavaScript arrays

> this project is still under development and is not completely finished.

## Getting Started

```bash
## install with bower
$ bower install enumerablejs

## install with npm
$ npm install asenumerable
```

## How to use
On any native javascript array, simply call asEnumerable() followed by subsequent calls to any
of the methods outlined in this documentation.

## Enumerable
The main type for enumerablejs. Exposes linq style methods for use on javascript arrays.
```javascript
var arr = [{ name:"def", value: 1, description: "test object 2" }];

//initialize a new enumerable
var a = new Enumerable();

//or simply initialize an enumerable with an array
var b = new Enumerable(arr);

//enumerable methods are chainable
var c = b.take(1).count(); //c = 1
```

## toArray
converts the enumerable object back to a plain javascript array

```javascript
var arr = [{ name:"def", value: 1, description: "test object 2" }];

//create a new enumerable from the array
var b = new Enumerable(arr);

//convert b to a plain javascript array
var c = b.toArray();
```

## where
Filters a sequence of values based on a predicate.

|Parameter | Description |
| --- | --- |
| fn  | A function to test each element for a condition. |

``` javascript

//consider the following array.
var arr = [
{ name:"abc", value: 0, description: "test object 1" }, 
{ name:"def", value: 1, description: "test object 2" }];


//filter the array where name is equal to "def"
var arr = [];
var result = arr.asEnumerable().where(function (i, item, collection)
{
    return item.name === "def";
});


//the result will be an enumerable containing the following array
[{ name:"def", value: 1, description: "test object 2" }]
```

## select
Projects each element of a sequence into a new form.

|Parameter | Description |
| --- | --- |
| properties  | A string array of property names to select. |

``` javascript

//consider the following array.
var arr = [
{ name:"abc", value: 0, description: "test object 1" }, 
{ name:"def", value: 1, description: "test object 2" }];


//select a single property.
var result = arr.asEnumerable().select(["name"]);


//the result will be an enumerable containing the following array.
[{ name: "abc" }, { name: "def" }]


//select multiple properties.
var result = arr.asEnumerable().select(["name", "description"]);


//the result will be an enumerable containing the following array.
[{ name: "abc", description: "test object 1" }, { name: "def", description: "test object 2" }]
```

## orderBy
Sorts the elements of a sequence in ascending order according to a key.

|Parameter | Description |
| --- | --- |
| propertyName  | the key by which to order the elements in the enumerable by. propertyName should not be null or undefined. |
| fn  | a function applied to each element before performing the order operation. fn can be null or undefined. |

``` javascript

//consider the following array
var arr = [
{ name:"def", value: 0, description: "test object 1" }, 
{ name:"abc", value: 1, description: "test object 2" }];


//order the items by name
var result = arr.asEnumerable().orderBy("name");


//the result will be an enumerable containing the following array.
[{ name:"abc", value: 1, description: "test object 2" }, 
{ name:"def", value: 0, description: "test object 1" }];


//or you can use a transform function on each element while sorting by name
var result = arr.asEnumerable().orderBy("name", function(item) { return item.value + 1; });
```

## orderByDescending
Sorts an array of objects in a sequence in descending order according to a key.

|Parameter | Description |
| --- | --- |
| propertyName  | the key by which to order the elements in the enumerable by. propertyName should not be null or undefined. |
| fn  | a function applied to each element before performing the order operation. fn can be null or undefined. |

```javascript

//consider the following array
var arr = [
{ name:"def", value: 0, description: "test object 1" }, 
{ name:"abc", value: 1, description: "test object 2" }];


//order by value descending
var result = arr.asEnumerable().orderByDescending("value");


//the result will be an enumerable containing the following array. 
[{ name:"abc", value: 1, description: "test object 2" },
{ name:"def", value: 0, description: "test object 1" }]

//or you can use a transform function on each element while sorting by value
var result = arr.asEnumerable().orderByDescending("value", function(item) { return item.value + 1; });
```

## any
``` javascript
var arr = [];
var result = arr.asEnumerable().any();
```

## count
``` javascript
var arr = [];
var result = arr.asEnumerable().count();
```

## first
``` javascript
var arr = [];
var result = arr.asEnumerable().first();
```
## firstOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().firstOrDefault();
```

## last
``` javascript
var arr = [];
var result = arr.asEnumerable().last();
```

## lastOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().lastOrDefault();
```

## single
``` javascript
var arr = [];
var result = arr.asEnumerable().single();
```

## singleOrDefault
``` javascript
var arr = [];
var result = arr.asEnumerable().singleOrDefault();
```

## take
``` javascript
var arr = [];
var result = arr.asEnumerable().take();
```
## takeWhile
``` javascript
var arr = [];
var result = arr.asEnumerable().takeWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
## skipWhile
``` javascript
var arr = [];
var result = arr.asEnumerable().skipWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
## toArray
``` javascript
var enumObj = new Enumerable();

var arr = enumObj.toArray();
```

## minimum
``` javascript
var arr = [];
var result = arr.asEnumerable().minmum();
```
## maximum
``` javascript
var arr = [];
var result = arr.asEnumerable().maximum();
```
