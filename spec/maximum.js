describe("maximum -- correct maximum value", function ()
{
    it("returns the maximum integer value within an array", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, 1, 2, null];

        var result = testArray.asEnumerable().maximum();

        expect(result).toEqual(2);
    });
});

describe("maximum -- empty collection", function ()
{
    it("returns null on empty collections", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().maximum();

        expect(result).toEqual(null);
    });
});