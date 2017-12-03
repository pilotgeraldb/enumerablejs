var Enumerable = require('../src/enumerable');

describe("skip", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("should skip specified number of items and return the remaining items", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.skip(2);

            expect(result).toEqual(new Enumerable([{ name: '5678', id: 3 }]));
        });
    });

    describe("when an enumerable object has multiple items", function ()
    {
        it("should skip specified number of items and return the remaining items", function ()
        {
            var testArray = new Enumerable([98, 92, 85, 82, 70, 59, 56]);

            var result = testArray.skip(3);

            expect(result).toEqual(new Enumerable([82, 70, 59, 56]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return empty enumerable", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.skip(2);

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when count is a greater integer than the length of the enumerable object", function ()
    {
        it("should return current enumerable", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.skip(50);

            expect(result).toEqual(testArray);
        });
    });
});