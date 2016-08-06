describe("count -- single item collection", function ()
{
    it("returns 1", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().count();

        expect(result).toEqual(1);
    });
});

describe("count -- multi item collection", function ()
{
    it("returns 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().count();

        expect(result).toEqual(3);
    });
});

describe("count -- empty collection", function ()
{
    it("returns 0", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().count();

        expect(result).toEqual(0);
    });
});