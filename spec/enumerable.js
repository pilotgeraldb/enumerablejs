var Enumerable = require('../src/enumerable');

describe("Enumerable", function ()
{
    describe("when initialized from an empty array", function ()
    {
        it("should return an empty enumerable object", function ()
        {
            var testArray = [];

            var result = new Enumerable(testArray);

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when initialized from a null array", function ()
    {
        it("should return an empty enumerable object", function ()
        {
            var testArray = null;

            var result = new Enumerable(testArray);

            expect(result).toEqual(new Enumerable([]));
        });
    });
});