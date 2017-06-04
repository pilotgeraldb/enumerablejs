var Enumerable = require("../build/js/enumerable.js");

describe("any", function ()
{
    describe("when an enumerable object has items", function ()
    {
        it("should return true", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.any();

            expect(result).toEqual(true);
        });
    });

    describe("when an enumerable object has no items", function ()
    {
        it("should return false", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.any();

            expect(result).toEqual(false);
        });
    });
});