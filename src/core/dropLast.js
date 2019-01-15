var Enumerable = require('../enumerable');

Enumerable.fn.dropLast = function(count)
{
    if(count <= 0)
    {
        return new Enumerable(this.collection);
    }

    if(this.collection.length > count)
    {
        return new Enumerable(this.collection.splice(0, this.collection.length - count));
    }
    return new Enumerable();
};