var Enumerable = require('../src/enumerable');

describe("shuffle", function ()
{
    describe("when an enumerable object has items", function ()
    {
        it("it should shuffle the items", function ()
        {
            var testArray = new Enumerable([0, 1, 2, 3]);

            var result = testArray.shuffle();

            expect(result).not.toEqual(new Enumerable([0, 1, 2, 3]));
        });
    });
});