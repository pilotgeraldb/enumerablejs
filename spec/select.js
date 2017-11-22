var Enumerable = require('../src/enumerable');

describe("select", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("should return 3 objects containing only the selected fields", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.select(["name"]);

            expect(result).toEqual(new Enumerable([{ name: "test" }, { name: "1234" }, { name: "5678" }]));
        });
    });

    describe("when an enumerable object contains only 1 item", function ()
    {
        it("should return 1 object containing only the selected fields", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }]);

            var result = testArray.select(["name"]);

            expect(result).toEqual(new Enumerable([{ name: "test" }]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable object", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.select(["name"]);

            expect(result).toEqual(new Enumerable([]));
        });
    });
});