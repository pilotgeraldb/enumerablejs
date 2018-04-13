var Enumerable = require('../src/enumerable');

describe("except", function ()
{
    describe("when an enumerable object has items", function ()
    {
        it("it should return all items except the ones specified", function ()
        {
            var testArray = new Enumerable([0, 1, 2, 3, 4, 5]);

            var result = testArray.except([0, 2, 4]);

            expect(result).toEqual(new Enumerable([1, 3, 5]));
        });
    });

    describe("when an enumerable object has items that are objects", function ()
    {
        it("it should return all items except the ones specified", function ()
        {
            var testArray = new Enumerable([{name:"a", id:0}, {name:"b", id:1}]);

            var result = testArray.except([{name:"a", id:0}]);

            expect(result).toEqual(new Enumerable([{name:"b", id:1}]));
        });
    });

    describe("when an enumerable object has items and a custom compare function is specified", function ()
    {
        it("it should return all items except the ones specified using that equality function", function ()
        {
            var testArray = new Enumerable([{name:"a", id:0}, {name:"b", id:1}]);

            var result = testArray.except([{name:"a", id:0}], function(a, b) 
            { 
                if(a.name === b.name)
                {
                    return true;
                }

                return false;
            });

            expect(result).toEqual(new Enumerable([{name:"b", id:1}]));
        });
    });
});