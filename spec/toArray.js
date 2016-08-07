describe("toArray -- empty enumerable", function ()
{
    it("returns an empty array", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().toArray();

        expect(result).toEqual([]);
    });
});

describe("toArray -- single item enumerable", function ()
{
    it("returns an array with 1 item", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().toArray();

        expect(result).toEqual([{ name: 'test', id: 1 }]);
    });
});

describe("toArray -- multiple item enumerable", function ()
{
    it("returns an array with 3 items", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().toArray();

        expect(result).toEqual([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);
    });
});