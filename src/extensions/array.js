var Enumerable = require('../enumerable');

Array.prototype.asEnumerable = function ()
{
    var e = new Enumerable(this);

    return e;
};