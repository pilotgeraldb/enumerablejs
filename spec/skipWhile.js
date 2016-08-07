describe("skip while -- multiple items in collection", function ()
{
    it("skips items in a collection that match a predicate function", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().skipWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual([{ name: '1234', id: 2 }, { name: '5678', id: 3 }].asEnumerable());
    });
});

describe("skip while -- single item collection", function ()
{
    it("skips items in a collection that match a predicate function", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().skipWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual([].asEnumerable());
    });
});

describe("skip while  -- empty collection", function ()
{
    it("return empty enumerable when used on empty collection", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().skipWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual(testArray.asEnumerable());
    });
});