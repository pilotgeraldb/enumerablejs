let Enumerable = require('../src/enumerable');

describe("maximum", function ()
{
    describe("when an enumerable object contains integers and objects", function ()
    {
        it("should return the maximum integer value within an enumerable object", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, 1, 2, null]);

            let result = testArray.maximum();

            expect(result).toEqual(2);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return null", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.maximum();

            expect(result).toEqual(null);
        });
    });
});


