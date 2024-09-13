const fibonacci = require("./index");

test("Function returns an array with the correct length", () => {
    const digits = 5;
    const results = fibonacci(digits);
    const type = typeof results;
    const length = results.length;
    const isObject = type === "object";
    const hasLength = !!length;
    expect(isObject && hasLength && length === digits).toBe(true);
});

test("fibonacci(6) returns [0, 1, 1, 2, 3, 5]", () => {
    expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("fibonacci(8) returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
