let Enumerable = require('../enumerable');

Array.prototype.asEnumerable = function ()
{
    let e = new Enumerable(this);

    return e;
};