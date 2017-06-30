define("Enumerable", [], function()
{
    'use strict';
    function _enumerable(_array)
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

    _enumerable.fn = _enumerable.prototype;

    // _enumerable.__init = function(Enumerable)
    // {
    //     Array.prototype.asEnumerable = function()
    //     {
    //         var e = new Enumerable(this);

    //         return e;
    //     };

    //     return this;
    // };

    // return _enumerable.__init(_enumerable);

    return _enumerable;
});



require("./dependencies");