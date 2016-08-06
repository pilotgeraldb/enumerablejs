describe("single -- single item", function ()
{
    it("returns only a single item from a collection of 1", function ()
    {
        var testArray = [{ name: 'test', id: 1 }];

        var result = testArray.asEnumerable().single();

        expect(result).toEqual({ name: 'test', id: 1 });
    });
});

describe("single -- multi item collection", function ()
{
    it("throws an exception for collection of length 3", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = false;
        
        try
        {
            testArray.asEnumerable().single();
        }
        catch(ex)
        {
            result = true;
        }
            
        expect(result).toEqual(true);
    });
});

describe("single -- empty collection", function ()
{
    it("throws exception when the collection is empty", function ()
    {
        var testArray = [];

        var result = false;
        
        try
        {
            testArray.asEnumerable().single();
        }
        catch(ex)
        {
            result = true;
        }
            
        expect(result).toEqual(true);
    });
});