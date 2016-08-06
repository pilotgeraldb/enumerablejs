describe("take -- multiple items in collection", function ()
{
    it("only takes specified number of items from the beginning of the collection", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().take(2);

        expect(result).toEqual([{ name: 'test', id: 1 }, { name: '1234', id: 2 }].asEnumerable());
    });
});

describe("take -- empty collection", function ()
{
    it("return empty enumerable when used on empty collection, regardless of count specified", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().take(2);

        expect(result).toEqual([].asEnumerable());
    });
});

describe("take -- count greater than collection", function ()
{
    it("return current enumerable when used on a collection with a length greater than the specified count", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().take(50);

        expect(result).toEqual(testArray.asEnumerable());
    });
});