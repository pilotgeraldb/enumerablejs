var Enumerable = require('../enumerable');

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