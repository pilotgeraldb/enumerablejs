describe("minimum -- correct minimum value", function ()
{
    it("returns the maximum integer value within an array", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, 1, 2, null];

        var result = testArray.asEnumerable().minimum();

        expect(result).toEqual(1);
    });
});

describe("minimum -- empty collection", function ()
{
    it("returns null on empty collections", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().minimum();

        expect(result).toEqual(null);
    });
});