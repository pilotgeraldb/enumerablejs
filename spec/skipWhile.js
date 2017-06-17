var Enumerable = require('../src/enumerable');

describe("skip while", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("should skip items that match a predicate function and return the others", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([{ name: '1234', id: 2 }, { name: '5678', id: 3 }]));
        });
    });

    describe("when an enumerable object has 1 item", function ()
    {
        it("should skips items that match a predicate function and return the others", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }]);

            var result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([]));
        });
    });
});