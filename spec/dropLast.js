let Enumerable = require('../src/enumerable');

describe("dropLast", function ()
{
    describe("when an enumerable object contains only 10 items", function ()
    {
        it("it should drop the last 5 items", function ()
        {
            let testArray = new Enumerable([0,1,2,3,4,5,6,7,8,9]);

            let result = testArray.dropLast(5);

            expect(result).toEqual(new Enumerable([0,1,2,3,4]));
        });
    });

    describe("when an enumerable object contains only 10 items", function ()
    {
        it("it should return an empty enumerable when asked to drop the last 11", function ()
        {
            let testArray = new Enumerable([0,1,2,3,4,5,6,7,8,9]);

            let result = testArray.dropLast(11);

            expect(result).toEqual(new Enumerable());
        });
    });

    describe("when an enumerable object contains zero items", function ()
    {
        it("it should return an empty enumerable when asked to drop any amount", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.dropLast(11);

            expect(result).toEqual(new Enumerable());
        });
    });

    describe("when asked to drop a negative number of items", function ()
    {
        it("it should return the input enumerable", function ()
        {
            let testArray = new Enumerable([1,2,3]);

            let result = testArray.dropLast(-11);

            expect(result).toEqual(new Enumerable([1,2,3]));
        });
    });
});