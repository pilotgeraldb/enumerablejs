Object.prototype.getType = function ()
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
  else if(typeof this === 'function')
  {
    return 'function';
  }

  return typeString;
};

Object.prototype.isEqual = function (object2, order_matters)
{
  var keys1 = Object.keys(this),
    keys2 = Object.keys(object2),
    i, key;

  // Test 1: Same number of elements
  if(keys1.length !== keys2.length)
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
    if(keys1[i] !== keys2[i])
    {
      return false;
    }
  }

  // Test 3: Values
  for(i = 0; i < keys1.length; i++)
  {
    key = keys1[i];
    if(this[key] !== object2[key])
    {
      return false;
    }
  }

  return true;
};