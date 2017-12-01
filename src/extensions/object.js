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
    else 	if(typeString === '[object Object]')
    {
      return 'object';
    } 
    else if (typeof this === "function")
    {
      return 'function';
    }   
    
    return typeString;
};