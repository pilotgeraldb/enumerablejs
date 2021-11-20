let Enumerable = require('../enumerable');

Enumerable.fn.maximum = function()
{
    let result = null;

    function isNumeric(x)
    {
        return (x !== null && x.getType() === 'number') && (x % 1 === 0);
    }

    let temp = [];

    for(let i = 0; i < this.collection.length; i++)
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