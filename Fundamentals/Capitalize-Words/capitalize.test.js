const capitalizeWords = require("./index");

test("capitalizeWords returns a string", () => {
    const results = capitalizeWords("spaghetti");
    expect(results && typeof results === "string").toBe(true);
});

test('capitalizeWords("the quick brown fox jumps over the lazy dog") returns "The Quick Brown Fox Jumps Over The Lazy Dog"', () => {
    expect(capitalizeWords("the quick brown fox jumps over the lazy dog")).toEqual("The Quick Brown Fox Jumps Over The Lazy Dog");
});

test('capitalizeWords("Sphinx of black quartz, judge my vow") returns "Sphinx Of Black Quartz, Judge My Vow"', () => {
    expect(capitalizeWords("Sphinx of black quartz, judge my vow")).toEqual("Sphinx Of Black Quartz, Judge My Vow");
});
