var Enumerable = require('../enumerable');

Enumerable.fn.select = function(obj)
{
    var results = [];

    for(var i = 0; i < this.collection.length; i++)
    {
        var item = this.collection[i];

        if(obj !== null && obj !== undefined && obj.length > 0)
        {
            var _temp = {};
            for(var x = 0; x < obj.length; x++)
            {
                var prop = obj[x];
                for(var p in item)
                {
                    if(p === prop)
                    {
                        _temp[prop] = item[p];
                    }
                }
            }
            results.push(_temp);
        }
        else
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};