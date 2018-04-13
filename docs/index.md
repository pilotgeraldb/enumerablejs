# enumerablejs 

## Getting Started

### yarn

```bash
## install with yarn
$ yarn add asenumerable
```

### bower

```bash
## install with bower
$ bower install enumerablejs
```

### npm

```bash
## install with npm
$ npm install asenumerable
```

## How to use

On any native javascript array, simply call asEnumerable() followed by subsequent calls to any
of the methods outlined in this documentation.

The main type for enumerablejs is `Enumerable`. It exposes linq style methods for use on javascript arrays.

```javascript
var arr = [{ name:"def", value: 1, description: "test object 2" }];

//the most common way to use enumerable js is to call asEnumerable() on an array
//which returns an instance of an Enumerable object
arr.asEnumerable();

//initialize a new enumerable
var a = new Enumerable();

//or simply initialize an enumerable with an array
var b = new Enumerable(arr);

//enumerable methods are chainable
var c = b.take(1).count(); //c = 1
```

## Static Methods

### Range

Generates a sequence of integral numbers within a specified range.

```javascript
var Enumerable = require("asenumerable");

var result = Enumerable.Range(4, 9);
//[4,5,6,7,8,9,10,11,12]

var result = Enumerable.Range(1, 10)
    .select(function(i, item, col) 
    { 
        return item * item; 
    });

///[1,4,9,16,25,36,49,64,81,100]
```

## Methods

### toArray

converts the enumerable object back to a plain javascript array

```javascript
var arr = [{ name:"def", value: 1, description: "test object 2" }];

//create a new enumerable from the array
var b = new Enumerable(arr);

//convert b to a plain javascript array
var c = b.toArray();
```

### where

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

### select

Projects each element of a sequence into a new form.

|Parameter | Description |
| --- | --- |
| obj  | A function to create a projection of an item. Alternativley, this may also be a string array of property names to select. |

#### select via a projection function

``` javascript
var arr = [1,2,3,4]

arr.asEnumerable()
    .select(function(i, item, col) 
    { 
        return item * item; 
    });

//[1,4,9,16]
```

#### select via string array of properties

As of v1.1.1, if a single property is specified in the array `["property_name"]` then the result will not be an object, but an array of the values of that property from each item. 

However if multiple properties are specified in the array `["property_name_a", "property_name_b", "property_name_c"]` the result will be an array of object each containing the specified properties. This is also how single property selection versions prior to v1.1.1.

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

### orderBy

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

### orderByDescending

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

### any

Determines whether any element of a sequence satisfies a condition.

``` javascript
//consider the following array
var arr = [];

//result equals false
var result = arr.asEnumerable().any();
```

### count

Returns the number of elements in a sequence.

|Parameter | Description |
| --- | --- |
| fn  | A function to test each element for a condition. |

``` javascript
//consider the following array
var arr [{ name: 'test', id: 1 }, { name: 'test', id: 2 }, { name: 'test2', id: 2 }];

//result equals 3
var result = arr.asEnumerable().count();

//or supply a predicate function.
//result equals 2
var result = testArray.count(function(i, item, col)
            {
                return item.name === 'test';
            });
```

### first

Returns the first element of a sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().first();
```

### firstOrDefault

Returns the first element of a sequence, or a default value if the sequence contains no elements.

``` javascript
var arr = [];
var result = arr.asEnumerable().firstOrDefault();
```

### last

Returns the last element of a sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().last();
```

### lastOrDefault

Returns the last element of a sequence, or a default value if the sequence contains no elements.

``` javascript
var arr = [];
var result = arr.asEnumerable().lastOrDefault();
```

### single

Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().single();
```

### singleOrDefault

Returns a single, specific element of a sequence, or a default value if that element is not found.

``` javascript
var arr = [];
var result = arr.asEnumerable().singleOrDefault();
```

### take

Returns a specified number of contiguous elements from the start of a sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().take();
```
## takeWhile
Returns elements from a sequence as long as a specified condition is true.

``` javascript
var arr = [];
var result = arr.asEnumerable().takeWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
### skipWhile

Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.

``` javascript
var arr = [];
var result = arr.asEnumerable().skipWhile(function (i, item, collection)
{
    return (item.name === "test");
});
```
### toArray

Converts an enumerable object to a native javascript array.

``` javascript
var enumObj = new Enumerable();

var arr = enumObj.toArray();
```

### minimum

Returns the minimum value in a sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().minmum();
```

### maximum

Returns the maximum value in a sequence.

``` javascript
var arr = [];
var result = arr.asEnumerable().maximum();
```

### dropFirst

Drops the first n number of items in a collection

``` javascript
var arr = [0,1,2,3];
var result = arr.asEnumerable().dropFirst(2);
```

### dropLast

Drops the last n number of items in a collection

``` javascript
var arr = [0,1,2,3];
var result = arr.asEnumerable().dropLast(2);
```

### shuffle

Randomly shuffles the collection

``` javascript
var arr = [0,1,2,3];
var result = arr.asEnumerable().shuffle();
```

### except

returns all items except the ones specified in the input collection

``` javascript
var arr = [0,1,2,3];
var result = arr.asEnumerable().except([1,3]);

//returns an enumerable containing [0, 2]
```
