describe("where -- items", function ()
{
    it("returns an array containing one item. the name property of which will be equal to 'test'", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

        var result = testArray.asEnumerable().where(function (i, item, collection)
        {
            return item.name === "test";
        }).toArray()[0].name;

        expect(result).toEqual("test");
    });
});


describe("where -- amount of items", function ()
{
    it("returns an array containing exactly two items", function ()
    {
        var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }, { name: 'test1', id: 4 }];

        var result = testArray.asEnumerable().where(function (i, item, collection)
        {
            return item.name === "test" || item.name === "test1";
        }).toArray().length;

        expect(result).toEqual(2);
    });
});