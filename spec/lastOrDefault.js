﻿let Enumerable = require('../src/enumerable');

describe("lastOrDefault", function ()
{
    describe("when an enumerable object contains only 1 item", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.lastOrDefault();

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should return the last item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.lastOrDefault();

            expect(result).toEqual({ name: '5678', id: 3 });
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return null", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.lastOrDefault();

            expect(result).toEqual(null);
        });
    });

    describe("when there is a default function passed in and the enumerable object is empty", function ()
    {
        it("should return the value of the default function", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.lastOrDefault(function () { return 3; });

            expect(result).toEqual(3);
        });
    });

    describe("when the default value is a constant and the enumerable object is empty", function ()
    {
        it("should return that constant", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.lastOrDefault(3);

            expect(result).toEqual(3);
        });
    });
});









