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