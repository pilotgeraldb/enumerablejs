describe("firstOrDefault -- first value in single item collection", function ()
{
    it("returns first value in collection of length 1", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().firstOrDefault();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("firstOrDefault -- first value in multi item collection", function ()
{
    it("returns first value in collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().firstOrDefault();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("firstOrDefault -- empty collection", function ()
{
    it("returns null when the collection is empty", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().firstOrDefault();
        
        expect(result).toEqual(null);
    });
});

describe("firstOrDefault -- returns default from function", function ()
{
    it("returns the return value of the specified function when the collection is empty", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().firstOrDefault(function () { return 3; });
            
        expect(result).toEqual(3);
    });
});

describe("firstOrDefault -- returns default from constant", function ()
{
    it("returns the specified constant when the collection is empty", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().firstOrDefault(3);
            
        expect(result).toEqual(3);
    });
});