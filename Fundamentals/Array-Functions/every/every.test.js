const every = require("./index");

test("every returns a boolean", () => {
    expect(typeof every(["restaurant", "spaghetti", "antidisestablishmentarianism", "cat"]) === "boolean").toBe(true);
});

test(`With an array of ["restaurant", "spaghetti", "antidisestablishmentarianism", "cat"], we return "false" since "cat" fails`, () => {
    expect(every(["restaurant", "spaghetti", "antidisestablishmentarianism", "cat"])).toBe(false);
});

test(`With an array of ["restaurant", "spaghetti", "antidisestablishmentarianism"], we return "true" since all members pass`, () => {
    expect(every(["restaurant", "spaghetti", "antidisestablishmentarianism"])).toBe(true);
});
