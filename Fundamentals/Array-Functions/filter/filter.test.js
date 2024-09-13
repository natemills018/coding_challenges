const filter = require("./index");

const array = [
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "typescript", isPet: false },
    { name: "rock", isPet: true },
    { name: "computer", isPet: false },
];

test("filter returns an array", () => {
    const results = filter(array);
    const type = typeof results;
    const length = results.length;
    const isObject = type === "object";
    const hasLength = !!length;
    expect(isObject && hasLength).toBe(true);
});

test(`With an array of [{ name: "cat", isPet: true }, { name: "dog", isPet: true }, { name: "typescript", isPet: false }, { name: "rock", isPet: true }, { name: "computer", isPet: false }], we return [{ name: "cat", isPet: true }, { name: "dog", isPet: true }, { name: "rock", isPet: true }]`, () => {
    const results = filter(array);
    const type = typeof results;
    const length = results.length;
    const isObject = type === "object";
    const hasLength = !!length;
    const correctLength = 3;
    expect(isObject && hasLength && length === correctLength).toBe(true);
});
