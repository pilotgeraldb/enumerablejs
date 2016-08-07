describe("singleOrDefault -- first value in single item collection, no default specified", function ()
{
    it("returns first value in collection of length 1", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().singleOrDefault();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("singleOrDefault -- first value in single item collection, constant default specified", function ()
{
    it("returns first value in collection of length 1 even though a constant is passed in", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().singleOrDefault(3);

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("singleOrDefault -- first value in single item collection, function default specified", function ()
{
    it("returns first value in collection of length 1 even though a function is passed in", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().singleOrDefault(function () { return 3; });

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("singleOrDefault -- multi item collection with no default specified", function ()
{
    it("returns null in collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().singleOrDefault();

        expect(result).toEqual(null);
    });
});

describe("singleOrDefault -- multi item collection with default constant specified", function ()
{
    it("returns specified constant in collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().singleOrDefault(3);

        expect(result).toEqual(3);
    });
});

describe("singleOrDefault -- multi item collection with default function specified", function ()
{
    it("returns specified constant in collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().singleOrDefault(function () { return 3; });

        expect(result).toEqual(3);
    });
});

describe("singleOrDefault -- empty collection", function ()
{
    it("returns null when the collection is empty", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().singleOrDefault();

        expect(result).toEqual(null);
    });
});