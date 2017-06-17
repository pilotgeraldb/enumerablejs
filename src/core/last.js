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