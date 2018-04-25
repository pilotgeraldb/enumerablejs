var Enumerable = require('../enumerable');

String.prototype.asEnumerable = function()
{
    var arr = [];

    for(var i = 0; i < this.length; i++)
    {
        arr[i] = this.charAt(i);
    }

    return new Enumerable(arr);
};