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

module.exports = Enumerable;

require('./dependencies');
