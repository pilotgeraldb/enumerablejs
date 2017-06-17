var Enumerable = require('../src/enumerable');

describe("asEnumerable", function ()
{
    describe("when used on an empty array", function ()
    {
        it("should return an empty enumerable object", function ()
        {
            var testArray = [];

            var result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when there exists only a single item in the array", function ()
    {
        it("should return an enumerable object with that 1 item", function ()
        {
            var testArray = [{ name: 'test', id: 1 }];

            var result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
        });
    });

    describe("when there are 3 items in the array", function ()
    {
        it("should return an enumerable object with those 3 items", function ()
        {
            var testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

            var result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]));
        });
    });
});