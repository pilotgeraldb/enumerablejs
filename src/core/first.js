let Enumerable = require('../enumerable');

Enumerable.fn.first = function()
{
    if(this.collection.length > 0)
    {
        return this.collection[0];
    }

    throw new Error('sequence contains no elements');
};
