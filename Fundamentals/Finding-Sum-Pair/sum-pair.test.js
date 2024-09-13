const findPair = require("./index");

test("findPair returns a boolean", () => {
    expect(typeof findPair([1, 2, 3, 4], 5) === "boolean").toBe(true);
});

test("findPair([1, 2, 4], 6) is true since 2+4=6", () => {
    expect(findPair([1, 2, 4], 6)).toEqual(true);
});

test("findPair([1, 2, 4], 7) is false since no pair of two numbers adds up to 7", () => {
    expect(findPair([1, 2, 4], 7)).toEqual(false);
});
