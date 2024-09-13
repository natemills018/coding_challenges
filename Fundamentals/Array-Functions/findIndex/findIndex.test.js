const findIndex = require("./index");

const array = [
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "typescript", isPet: false },
    { name: "computer", isPet: false },
    { name: "rock", isPet: true },
];

test("findIndex does not return null", () => {
    const results = findIndex(array);
    const isNotNull = results !== null;
    expect(isNotNull).toBe(true);
});

test("findIndex with the rock object returns the correct index position", () => {
    const results = findIndex(array);
    expect(results).toEqual(4);
});

test("findIndex without the rock object returns -1", () => {
    const results = findIndex(array.slice(0, 3));
    expect(results).toEqual(-1);
});
