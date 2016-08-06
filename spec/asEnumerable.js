describe("asEnumerable -- empty collection", function ()
{
    it("returns an empty enumerable", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable();

        expect(result).toEqual(new Enumerable([]));
    });
});

describe("asEnumerable -- single item collection", function ()
{
    it("returns an enumerable object with 1 item", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable();

        expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
    });
});

describe("asEnumerable -- multiple item collection", function ()
{
    it("returns an enumerable object with 3 items", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable();

        expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]));
    });
});