var Enumerable = require("../build/js/enumerable.js");

describe("take", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("should only take specified number of items from the beginning of the collection", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.take(2);

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return empty enumerable", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.take(2);

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when count is a greater integer than the length of the enumerable object", function ()
    {
        it("should return current enumerable", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.take(50);

            expect(result).toEqual(testArray);
        });
    });
});