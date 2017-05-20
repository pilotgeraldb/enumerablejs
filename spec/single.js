describe("single", function ()
{
    describe("when an enumerable object contains only 1 item", function ()
    {
        it("should return that item", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }]);

            var result = testArray.single();

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should throw an exception", function ()
        {
            var testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            var result = false;

            try
            {
                testArray.single();
            }
            catch (ex)
            {
                result = true;
            }

            expect(result).toEqual(true);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should throw an exception", function ()
        {
            var testArray = new Enumerable([]);

            var result = false;

            try
            {
                testArray.single();
            }
            catch (ex)
            {
                result = true;
            }

            expect(result).toEqual(true);
        });
    });
});