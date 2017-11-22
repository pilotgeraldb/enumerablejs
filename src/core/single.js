var Enumerable = require('../enumerable');

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