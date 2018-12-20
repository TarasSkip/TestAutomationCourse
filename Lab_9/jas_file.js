let calc = require ("./calc.js");

describe ('+', function () {
    it("", function () {
        expect(calc(5, 4, "+")).toEqual(9);
    });
});

describe ('-', function () {
    it("", function () {
        expect(calc(5, 4, "-")).toEqual(1);
    });
});

describe ('*', function () {
    it("", function () {
        expect(calc(5, 4, "*")).toEqual(20);
    });
});

describe ('/', function () {
    it("", function () {
        expect(calc(5, 4, "/")).toEqual(1.25);
    });
});

describe ('+', function () {
    it("", function () {
        expect(calc(5, 4, "+")).not.toBe(9);
    });
})