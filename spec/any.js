let Enumerable = require('../src/enumerable');

describe("any", function ()
{
    describe("when an enumerable object has items", function ()
    {
        it("should return true", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.any();

            expect(result).toEqual(true);
        });
    });

    describe("when an enumerable object has no items", function ()
    {
        it("should return false", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.any();

            expect(result).toEqual(false);
        });
    });
});