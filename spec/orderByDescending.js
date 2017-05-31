describe("orderByDescending", function ()
{
    describe("when an enumerable object contains only 1 string and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            var testArray = new Enumerable(["abc"]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable(["abc"]));
        });
    });

    describe("when an enumerable object contains only 1 number and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            var testArray = new Enumerable([56]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable([56]));
        });
    });

    describe("when an enumerable object contains only 1 object and no arguments are passed", function ()
    {
        it("should return that item", function ()
        {
            var testArray = new Enumerable([{ name: "test", value: 123 }]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable([{ name: "test", value: 123 }]));
        });
    });

    describe("when an enumerable object contains 3 strings and no arguments are passed", function ()
    {
        it("should return 3 strings sorted in descending order", function ()
        {
            var testArray = new Enumerable(["ghi", "abc", "def"]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable(["ghi", "def", "abc"]));
        });
    });

    describe("when an enumerable object contains 3 strings and no property argument is passed but a function is passed", function ()
    {
        it("should return 3 strings correctly altered by the function parameter, then sorted in descending order", function ()
        {
            var testArray = new Enumerable(["dog", "cat", "cow"]);

            var result = testArray.orderByDescending(null, function(x) 
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

            expect(result).toEqual(new Enumerable(["cow", "bdog", "acat"]));
        });
    });

    describe("when an enumerable object contains 3 numbers and no arguments are passed", function ()
    {
        it("should return 3 numbers sorted in descending order", function ()
        {
            var testArray = new Enumerable([1, 2, 3]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable([3, 2, 1]));
        });
    });

    describe("when an enumerable object contains 3 numbers and no property argument is passed but a function is passed", function ()
    {
        it("should return 3 numbers correctly altered by the function parameter, then sorted in descending order", function ()
        {
            var testArray = new Enumerable([123, 345, 678]);

            var result = testArray.orderByDescending(null, function(x) 
            { 
                return x + 10;
            });

            expect(result).toEqual(new Enumerable([688, 355, 133]));
        });
    });

    describe("when an enumerable object contains 3 objects and no arguments are passed", function ()
    {
        it("should return 3 objects unsorted", function ()
        {
            var testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]));
        });
    });

    describe("when an enumerable object contains 3 objects and a property argument is passed", function ()
    {
        it("should return 3 objects sorted in descending order by the specified property", function ()
        {
            var testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            var result = testArray.orderByDescending("name");

            expect(result).toEqual(new Enumerable([{ name: "test3", value: 789 }, { name: "test2", value: 456 }, { name: "test1", value: 123 }]));
        });
    });

    describe("when an enumerable object contains 3 objects and a property argument is passed and a function is passed", function ()
    {
        it("should return 3 objects sorted in descending order by the specified property", function ()
        {
            var testArray = new Enumerable([{ name: "test2", value: 456 }, { name: "test1", value: 123 }, { name: "test3", value: 789 }]);

            var result = testArray.orderByDescending("name", function(x) 
            { 
                x.value = x.value + 10;
                return x;
            });

            expect(result).toEqual(new Enumerable([{ name: "test3", value: 799 }, { name: "test2", value: 466 }, { name: "test1", value: 133 }]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable", function ()
        {
            var testArray = new Enumerable([]);

            var result = testArray.orderByDescending();

            expect(result).toEqual(new Enumerable([]));
        });
    });
});

