describe("take while -- multiple items in collection", function ()
{
    it("description here", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().takeWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual([{ name: '1234', id: 2 }, { name: '5678', id: 3 }].asEnumerable());
    });
});

describe("take while -- single item collection", function ()
{
    it("description here", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().takeWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual([].asEnumerable());
    });
});

describe("take while  -- empty collection", function ()
{
    it("description here", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().takeWhile(function (i, item, collection)
        {
            return (item.name === "test");
        });

        expect(result).toEqual(testArray.asEnumerable());
    });
});