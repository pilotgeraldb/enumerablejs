describe("any -- has items", function ()
{
    it("indicates that the collection has items", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().any();

        expect(result).toEqual(true);
    });
});


describe("any -- no items in collection", function ()
{
    it("indicates that the collection has no items", function ()
    {
        var testArray = [];

        var result = testArray.asEnumerable().any();

        expect(result).toEqual(false);
    });
});