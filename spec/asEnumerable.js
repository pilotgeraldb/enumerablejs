let Enumerable = require('../src/enumerable');

describe("asEnumerable", function ()
{
    describe("when used on a string", function ()
    {
        it("should return a character array", function ()
        {
            let str = "abcdef";

            let result = str.asEnumerable();

            expect(result).toEqual(new Enumerable(["a", "b", "c", "d", "e", "f"]));
        });
    });

    describe("when toString() is called on an enumerable of strings", function ()
    {
        it("should return a string", function ()
        {
            let str = "abcdef";

            let result = str.asEnumerable().toString();

            expect(result).toEqual("abcdef");
        });
    });

    describe("when used on an empty array", function ()
    {
        it("should return an empty enumerable object", function ()
        {
            let testArray = [];

            let result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when there exists only a single item in the array", function ()
    {
        it("should return an enumerable object with that 1 item", function ()
        {
            let testArray = [{ name: 'test', id: 1 }];

            let result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
        });
    });

    describe("when there are 3 items in the array", function ()
    {
        it("should return an enumerable object with those 3 items", function ()
        {
            let testArray = [{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }];

            let result = testArray.asEnumerable();

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]));
        });
    });
});