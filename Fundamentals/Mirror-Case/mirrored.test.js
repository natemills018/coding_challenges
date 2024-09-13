const mirror = require("./index");

test("mirror returns a string", () => {
    expect(typeof mirror("HeLLo wOrLD") === "string").toBe(true);
});

test(`mirror("HeLLo wOrLD") returns "hEllO WoRld"`, () => {
    expect(mirror("HeLLo wOrLD")).toEqual("hEllO WoRld");
});

test(`mirror("loREM ipSuM") returns "LOrem IPsUm"`, () => {
    expect(mirror("loREM ipSuM")).toEqual("LOrem IPsUm");
});
