let Enumerable = require('../src/enumerable');

describe("shuffle", function ()
{
    describe("when an enumerable object has items", function ()
    {
        it("it should shuffle the items", function ()
        {
            let testArray = new Enumerable([0, 1, 2, 3]);

            let result = testArray.shuffle();

            expect(result).not.toEqual(new Enumerable([0, 1, 2, 3]));
        });
    });
});