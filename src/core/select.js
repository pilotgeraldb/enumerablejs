let Enumerable = require('../enumerable');

Enumerable.fn.select = function(obj)
{
    let results = [];

    function explicit(item, obj)
    {
        let _temp = {};

        if(obj.length === 1)
        {
            for(let p in item)
            {
                if(p === obj[0])
                {
                    _temp = item[p];
                    break;
                }
            }
        }
        else
        {
            for(let x = 0; x < obj.length; x++)
            {
                let prop = obj[x];

                for(let _p in item)
                {
                    if(_p === prop)
                    {
                        _temp[prop] = item[_p];
                    }
                }
            }
        }

        results.push(_temp);
    }

    function funcEval(obj, i, item, col)
    {
        results.push(obj(i, item, col));
    }

    for(let i = 0; i < this.collection.length; i++)
    {
        let item = this.collection[i];

        if(obj !== null && obj !== undefined && obj.length > 0)
        {
            if(obj.getType() === 'function')
            {
                funcEval(obj, i, item, this.collection);
            }
            else
            {
                explicit(item, obj);
            }
        }
        else
        {
            results.push(item);
        }
    }

    return results.asEnumerable();
};