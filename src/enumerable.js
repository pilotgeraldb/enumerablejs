(function(root, factory)
{
    if(typeof define === 'function' && define.amd)
    {
        define([], factory);
    }
    else if(typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    }
    else
    {
        root.Enumerable = factory();
    }
}
    (this, function() 
    {
        Array.prototype.asEnumerable = function()
        {
            var e = new Enumerable(this);

            return e;
        };

        var Enumerable = (function()
        {
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
            };

            _enumerable.fn = _enumerable.prototype;

            return _enumerable;
        }());

        return Enumerable;
    }));