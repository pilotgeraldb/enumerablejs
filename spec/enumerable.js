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

describe("Enumerable.Range", function ()
{
    describe("when range is called with start = 0 and count = 10", function ()
    {
        it("it should return the array [0,1,2,3,4,5,6,7,8,9,10]", function ()
        {
            var testArray = null;

            var result = Enumerable.Range(0, 10);

            expect(result).toEqual(new Enumerable([0,1,2,3,4,5,6,7,8,9]));
        });
    });

    describe("when range is called with start = 4 and count = 9", function ()
    {
        it("it should return the array [4,5,6,7,8,9,10,11,12,13]", function ()
        {
            var testArray = null;

            var result = Enumerable.Range(4, 9);

            expect(result).toEqual(new Enumerable([4,5,6,7,8,9,10,11,12]));
        });
    });

    describe("when range is used for fancy stuff", function ()
    {
        it("it should [1,4,9,16,25,36,49,64,81,100]", function ()
        {
            var testArray = null;

            var result = Enumerable.Range(1, 10).select(function(i, item, col) { return item * item; });

            console.log(result);

            expect(result).toEqual(new Enumerable([1,4,9,16,25,36,49,64,81,100]));
        });
    });
});