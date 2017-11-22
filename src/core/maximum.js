var Enumerable = require('../enumerable');

Enumerable.fn.maximum = function()
{
    var result = null;

    function isNumeric(x)
    {
        return (typeof x === 'number') && (x % 1 === 0);
    }

    var temp = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        if(isNumeric(this.collection[i]))
        {
            temp.push(this.collection[i]);
        }
    }

    if(temp.length > 0)
    {
        result = Math.max.apply(null, temp);
    }

    return result;
};