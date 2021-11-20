let Enumerable = require('../enumerable');

Enumerable.fn.single = function()
{
    if(this.collection.length === 1)
    {
        return this.collection[0];
    }

    if(this.collection.length < 1)
    {
        throw new Error('sequence contains no elements');
    }
    else
    {
        throw new Error('collection contains more than one item');
    }
};