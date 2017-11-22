Array.prototype.asEnumerable = function()
{
    var e = new Enumerable(this);

    return e;
};

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
};

Enumerable.fn = Enumerable.prototype;

module.exports = Enumerable;

require('./dependencies');
