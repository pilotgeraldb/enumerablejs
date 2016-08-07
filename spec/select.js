describe("select -- multiple items in collection", function ()
{
    it("returns selected fields when there are multiple items in collection", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().select(["name"]);

        expect(result).toEqual([{ name: "test" }, { name: "1234" }, { name: "5678" }].asEnumerable());
    });
});

describe("select -- single item in collection", function ()
{
    it("returns selected fields when there is only one item in the collection", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().select(["name"]);

        expect(result).toEqual([{ name: "test" }].asEnumerable());
    });
});

describe("select -- empty collection", function ()
{
    it("returns null when there are no items in collection", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().select(["name"]);

        expect(result).toEqual([].asEnumerable());
    });
});