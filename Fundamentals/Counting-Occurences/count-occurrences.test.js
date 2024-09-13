const countOccurrences = require("./index");

test("countOccurrences returns an object", () => {
    const results = countOccurrences("spaghetti");
    expect(results && typeof results === "object").toBe(true);
});

test("countOccurrences returns an object that is not empty", () => {
    expect(Object.keys(countOccurrences("spaghetti")).length).toBeTruthy();
});

test('countOccurrences("spaghetti") returns { s: 1, p: 1, a: 1, g: 1, h: 1, e: 1, t: 2, i: 1 }', () => {
    expect(countOccurrences("spaghetti")).toEqual({ p: 1, a: 1, s: 1, g: 1, h: 1, e: 1, t: 2, i: 1 });
});
