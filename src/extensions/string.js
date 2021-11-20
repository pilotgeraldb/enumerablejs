let Enumerable = require('../enumerable');

String.prototype.asEnumerable = function()
{
    let arr = [];

    for(let i = 0; i < this.length; i++)
    {
        arr[i] = this.charAt(i);
    }

    return new Enumerable(arr);
};