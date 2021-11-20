let Enumerable = require('../src/enumerable');

describe("orderBy", function ()
{
    describe("when an enumerable object contains only 1 string and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable(["abc"]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable(["abc"]));
        });
    });

    describe("when an enumerable object contains only 1 number and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable([56]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([56]));
        });
    });

    describe("when an enumerable object contains only 1 object and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable([{ name: "test", value: 123 }]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([{ name: "test", value: 123 }]));
        });
    });

    describe("when an enumerable object contains 3 strings and no arguments are passed", function ()
    {
        it("should return 3 strings sorted in ascending order", function ()
        {
            let testArray = new Enumerable(["ghi", "abc", "def"]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable(["abc", "def", "ghi"]));
        });
    });

    describe("when an enumerable object contains 3 datetime objects and no arguments are passed", function ()
    {
        it("should return 3 datetime objects sorted in ascending order", function ()
        {
            let testArray = new Enumerable([new Date(2015,00,01), new Date(2014,00,01), new Date(2013,00,01)]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([new Date(2013,00,01), new Date(2014,00,01), new Date(2015,00,01)]));
        });
    });

    describe("when an enumerable object contains 3 strings and no property argument is passed but a function is passed", function ()
    {
        it("should return 3 strings correctly altered by the function parameter, then sorted in ascending order", function ()
        {
            let testArray = new Enumerable(["dog", "cat", "cow"]);

            let result = testArray.orderBy(null, function(x) 
            { 
                if(x === "dog")
                {
                    x = "b" + x;
                }

                if(x === "cat")
                {
                    x = "a" + x;
                }

                return x;
            });

            expect(result).toEqual(new Enumerable(["acat", "bdog", "cow"]));
        });
    });

    describe("when an enumerable object contains 3 numbers and no arguments are passed", function ()
    {
        it("should return 3 numbers sorted in ascending order", function ()
        {
            let testArray = new Enumerable([3, 2, 1]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([1, 2, 3]));
        });
    });

    describe("when an enumerable object contains 3 numbers and no property argument is passed but a function is passed", function ()
    {
        it("should return 3 numbers correctly altered by the function parameter, then sorted in ascending order", function ()
        {
            let testArray = new Enumerable([123, 345, 678]);

            let result = testArray.orderBy(null, function(x) 
            { 
                return x + 10;
            });

            expect(result).toEqual(new Enumerable([133, 355, 688]));
        });
    });

    describe("when an enumerable object contains 3 objects and no arguments are passed", function ()
    {
        it("should return 3 objects unsorted", function ()
        {
            let testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]));
        });
    });

    describe("when an enumerable object contains 3 booleans and no arguments are passed", function ()
    {
        it("should return 3 booleans sorted in ascending order", function ()
        {
            let testArray = new Enumerable([true, false, true]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([false, true, true]));
        });
    });

    describe("when an enumerable object contains 3 objects and a property argument is passed", function ()
    {
        it("should return 3 objects sorted in ascending order by the specified property", function ()
        {
            let testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            let result = testArray.orderBy("name");

            expect(result).toEqual(new Enumerable([{ name: "test1", value: 123 }, { name: "test2", value: 456 }, { name: "test3", value: 789 }]));
        });
    });

    describe("when an enumerable object contains 3 objects and a property argument is passed and a function is passed", function ()
    {
        it("should return 3 objects sorted in ascending order by the specified property", function ()
        {
            let testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            let result = testArray.orderBy("name", function(x) 
            { 
                x.value = x.value + 10;
                return x;
            });

            expect(result).toEqual(new Enumerable([{ name: "test1", value: 133 }, { name: "test2", value: 466 }, { name: "test3", value: 799 }]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.orderBy();

            expect(result).toEqual(new Enumerable([]));
        });
    });
});

