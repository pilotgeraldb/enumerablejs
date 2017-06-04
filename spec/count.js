var Enumerable = require("../build/js/enumerable.js");

describe("count", function ()
{
    describe("when an enumerable object has 1 item", function ()
    {
        it("should return the number 1", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }]);

            var result = testArray.count();

            expect(result).toEqual(1);
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should return 3", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.count();

            expect(result).toEqual(3);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return 0", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.count();

            expect(result).toEqual(0);
        });
    });
});