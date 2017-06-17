var Enumerable = require('../src/enumerable');

describe("minimum", function ()
{
    describe("when an enumerable object contains integers and objects", function ()
    {
        it("should return the minimum integer value within an enumerable object", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, 1, 2, null]);

            var result = testArray.minimum();

            expect(result).toEqual(1);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return null", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.minimum();

            expect(result).toEqual(null);
        });
    });
});



