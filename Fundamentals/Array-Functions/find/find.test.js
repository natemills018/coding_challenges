const find = require("./index");

const array = [
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "typescript", isPet: false },
    { name: "rock", isPet: true, doYouSmellWhatTheRockIsCooking: true },
    { name: "computer", isPet: false },
];

test("find with the rock object returns the rock object", () => {
    const results = find(array);
    expect(results.name === "rock" && results.doYouSmellWhatTheRockIsCooking).toBe(true);
});

test("find without valid data returns undefined", () => {
    const results = find(array.slice(0, 3));
    const type = typeof results;
    expect(type === "undefined").toBe(true);
});
