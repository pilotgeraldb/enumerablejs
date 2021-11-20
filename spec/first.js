let Enumerable = require('../src/enumerable');

describe("first", function ()
{
    describe("when an enumerable object contains only 1 item", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.first();

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should return the first item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.first();

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should throw an exception", function ()
        {
            let testArray = new Enumerable([]);

            let result = false;

            try
            {
                testArray.first();
            }
            catch (ex)
            {
                result = true;
            }

            expect(result).toEqual(true);
        });
    });
});





