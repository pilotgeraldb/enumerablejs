# enumerablejs
a JavaScript library that provides linq functions on native JavaScript arrays

```
$ bower install enumerablejs
```

```
$ npm install asenumerable
```

## where

``` javascript
var arr = [];
var result = arr.asEnumerable().where(function (i, item, collection)
{
    return item.name === "123";
});
```
## select
``` javascript
var arr = [];
var result = arr.asEnumerable().select(["name"]);
```

## orderBy
orderBy accepts two parameters `propertyName` and `fn`

`propertyName` is the property by which to order the elements in the enumerable by. propertyName can be null or undefined.

`fn` is a function applied to each element before performing the order operation. fn can be null or undefined.

``` javascript
var arr = [];
var result = arr.asEnumerable().orderBy();
```

## orderByDescending
orderByDescending accepts two parameters `propertyName` and `fn`

`propertyName` is the property by which to order the elements in the enumerable by. propertyName can be null or undefined.

`fn` is a function applied to each element before performing the order operation. fn can be null or undefined.

``` javascript
var arr = [];
var result = arr.asEnumerable().orderByDescending();
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
