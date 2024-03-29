﻿let Enumerable = require('../src/enumerable');

describe("singleOrDefault", function ()
{
    describe("when an enumerable object contains only 1 item", function ()
    {
        it("should return that item", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.singleOrDefault();

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object has 3 items", function ()
    {
        it("should return null", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.singleOrDefault();

            expect(result).toEqual(null);
        });
    });

    describe("when there is a default function passed in and the enumerable object has 1 item", function ()
    {
        it("should return the item in the enumerable object", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.singleOrDefault(function () { return 3; });

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when there is a default constant passed in and the enumerable object has 1 item", function ()
    {
        it("should return the item in the enumerable object", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.singleOrDefault(3);

            expect(result).toEqual({ name: 'test', id: 1 });
        });
    });

    describe("when an enumerable object contains 3 items and a default constant is used", function ()
    {
        it("should return default constant", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.singleOrDefault(3);

            expect(result).toEqual(3);
        });
    });

    describe("when an enumerable object contains 3 items and a default function is used", function ()
    {
        it("return the value of the default function", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.singleOrDefault(function () { return 3; });

            expect(result).toEqual(3);
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return null", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.singleOrDefault();

            expect(result).toEqual(null);
        });
    });
});


