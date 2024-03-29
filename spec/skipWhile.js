﻿let Enumerable = require('../src/enumerable');

describe("skip while", function ()
{
    describe("when an enumerable object has multiple items", function ()
    {
        it("should return everything after the item where the predicate function evaluated to false", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }, { name: '9012', id: 4 }]);

            let result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.id < 3);
            });

            expect(result).toEqual(new Enumerable([{ name: '5678', id: 3 }, { name: '9012', id: 4 }]));
        });
    });

    describe("when an enumerable object has multiple numbers", function ()
    {
        it("should return everything after the item where the predicate function evaluated to false", function ()
        {
            let testArray = new Enumerable([98, 92, 85, 82, 70, 59, 56]);

            let result = testArray.skipWhile(function (i, item, collection)
            {
                return (item >= 80);
            });

            expect(result).toEqual(new Enumerable([70, 59, 56]));
        });
    });

    describe("when no function is passed", function ()
    {
        it("should return the collection", function ()
        {
            let testArray = new Enumerable([98, 92, 85, 82, 70, 59, 56]);

            let result = testArray.skipWhile();

            expect(result).toEqual(testArray);
        });
    });

    describe("when an enumerable object has 1 item", function ()
    {
        it("should return everything after the item where the predicate function evaluated to false", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }]);

            let result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when an enumerable object is empty", function ()
    {
        it("should return an empty enumerable", function ()
        {
            let testArray = new Enumerable([]);

            let result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.name === "test");
            });

            expect(result).toEqual(new Enumerable([]));
        });
    });

    describe("when an enumerable object has multiple items and the predicate return true midway through the collection", function ()
    {
        it("should return everything after the item where the predicate function evaluated to false", function ()
        {
            let testArray = new Enumerable([{ name: 'test', id: 1 }, { name: '1234', id: 2 }, { name: '5678', id: 3 }]);

            let result = testArray.skipWhile(function (i, item, collection)
            {
                return (item.id < 3);
            });

            expect(result).toEqual(new Enumerable([{ name: '5678', id: 3 }]));
        });
    });

    //skip while >= 80
    //98, 92, 85, 82, 70, 59, 56
    //returns 70, 59, 56
});