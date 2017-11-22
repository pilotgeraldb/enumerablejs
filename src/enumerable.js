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

require('./core/any');
require('./core/count');
require('./core/first');
require('./core/firstOrDefault');
require('./core/last');
require('./core/lastOrDefault');
require('./core/maximum');
require('./core/minimum');
require('./core/orderBy');
require('./core/orderByDescending');
require('./core/select');
require('./core/single');
require('./core/singleOrDefault');
require('./core/skip');
require('./core/skipWhile');
require('./core/take');
require('./core/takeWhile');
require('./core/toArray');
require('./core/where');