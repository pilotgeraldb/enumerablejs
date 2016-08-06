describe("first -- first value in single item collection", function ()
{
    it("returns first value in collection of length 1", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().first();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("first -- first value in multi item collection", function ()
{
    it("returns first value in collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().first();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("first -- empty collection", function ()
{
    it("throws exception when the collection is empty", function ()
    {
        var testArray = [];

        var result = false;
        
        try
        {
            testArray.asEnumerable().first();
        }
        catch(ex)
        {
            result = true;
        }
            
        expect(result).toEqual(true);
    });
});