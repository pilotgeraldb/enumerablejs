var Enumerable = require("../build/js/enumerable.js");

describe("where", function ()
{
    describe("when an enumerable object conatins 3 items", function ()
    {
        it("should return an enumerable object", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = testArray.where(function (i, item, collection)
            {
                return item.name === "test";
            });

            expect(result).toEqual(new Enumerable([{ name: 'test', id: 1 }]));
        });
    });
});