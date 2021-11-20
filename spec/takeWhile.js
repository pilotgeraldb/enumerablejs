let Enumerable = require('../src/enumerable');

describe("take while", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("should take items that match a predicate function", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.takeWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
        });
    });

    describe("when no function passed", function ()
    {
        it("should return the collection", function ()
        {
            let testArray = new Enumerable(["apple", "passionfruit", "banana", "mango", "orange", "blueberry", "grape", "strawberry"]);

            let result = testArray.takeWhile();

            expect(result).toEqual(testArray);
        });
    });

    describe("when an enumerable object has multiple strings", function ()
    {
        it("should take items that match a predicate function", function ()
        {
            let testArray = new Enumerable(["apple", "passionfruit", "banana", "mango", "orange", "blueberry", "grape", "strawberry"]);

            let result = testArray.takeWhile(function (i, item, collection)
            {
                return (item.length >= i);
            });

            expect(result).toEqual(new Enumerable(["apple", "passionfruit", "banana", "mango", "orange", "blueberry"]));
        });
    });

    describe("when an enumerable object has 1 item", function ()
    {
        it("should take items that match a predicate function", function ()
        {
            let testArray = [{ name: 'test', id: 1 }];

            let result = testArray.asEnumerable().takeWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable", function ()
        {
            let testArray = [];

            let result = testArray.asEnumerable().takeWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([]));
        });
    });
});