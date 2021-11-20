let Enumerable = require('../src/enumerable');

describe("count", function ()
{
    describe("when an enumerable object has 1 item", function ()
    {
        it("should return the number 1", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.count();

            expect(result).toEqual(1);
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should return 3", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.count();

            expect(result).toEqual(3);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return 0", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.count();

            expect(result).toEqual(0);
        });
    });

    describe("when an enumerable object has 3 items and a predicate function is supplied", function ()
    {
        it("should return items that meet the predicate functions conditions", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: 'test', id: 2 }, { name: 'test2', id: 2 }]);

            let result = testArray.count(function(i, item, col)
            {
                return item.name === 'test';
            });

            expect(result).toEqual(2);
        });
    });

});