function Enumerable(_array)
{
    if(_array)
    {
        this.collection = _array;
    }
    else
    {
        this.collection = [];
    }
}

Enumerable.fn = Enumerable.prototype;

Enumerable.fn.toString = function()
{
    var separator = "";
    var result = "";

    for(var i = 0; i < this.collection.length; i++)
    {
        result += separator + this.collection[i];
    }

    return result;
};

Enumerable.Range = function(start, count)
{
    var result = [];

    for(var i = 0; i < count; i++)
    {
        result[i]  = start + i;
    }

    return result.asEnumerable();
};

module.exports = Enumerable;

require('./dependencies');
