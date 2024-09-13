const countVowels = require("./index");

test("countVowels returns a numerical value", () => {
    expect(typeof countVowels("Some string") === "number").toBe(true);
});

test('"Somebody once told me the world was gonna roll me" should find 14 vowels.', () => {
    expect(countVowels("Somebody once told me the world was gonna roll me")).toEqual(14);
});

test('A vowel free sentence of "Shy, slyly spryly tryst by my crypt" should yield 0', () => {
    expect(countVowels("Shy, slyly spryly tryst by my crypt")).toEqual(0);
});
