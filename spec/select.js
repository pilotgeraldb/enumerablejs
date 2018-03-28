var Enumerable = require('../src/enumerable');

describe("select", function ()
{
    describe("when an enumerable object has 3 items", function ()
    {
        it("it should return 3 value types", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.select(["name"]);

            expect(result).toEqual(new Enumerable(["test", "1234", "5678"]));
        });
    });

    describe("when an enumerable object has 3 items and multiple properties are selected via string array", function ()
    {
        it("it should return 3 objects containing only the selected fields", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1, x:1 }, { name: '1234', id: 2, x:1 }, { name: '5678', id: 3, x:1 }]);

            var result = testArray.select(["name", "id"]);

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]));
        });
    });

    describe("when an enumerable object contains only 1 item and a single property is selected via string array", function ()
    {
        it("it should return 1 value type", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }]);

            var result = testArray.select(["name"]);

            expect(result).toEqual(new Enumerable(["test"]));
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

    describe("when using a projection function", function ()
    {
        it("it should return projection", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.select(function(i, item, col)
                        {
                            return { name: item.name };
                        });

            expect(result).toEqual(new Enumerable([{ name: "test" }, { name: "1234" }, { name: "5678" }]));
        });
    });

    describe("when an enumerable object is empty and using a projection function", function ()
    {
        it("it should return an empty enumerable object", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.select(function(i, item, col)
                        {
                            return { name: item.name };
                        });

            expect(result).toEqual(new Enumerable([]));
        });
    });
});