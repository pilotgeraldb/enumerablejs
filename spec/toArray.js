let Enumerable = require('../src/enumerable');

describe("toArray", function ()
{
    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty array", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.toArray();

            expect(result).toEqual([]);
        });
    });


    describe("when an enumerable object has 1 item", function ()
    {
        it("should return an array containing that only that item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.toArray();

            expect(result).toEqual([{ name: 'test', id: 1 }]);
        });
    });


    describe("when an enumerable object has 3 items", function ()
    {
        it("should return and array with only those 3 items", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.toArray();

            expect(result).toEqual([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);
        });
    });
});

