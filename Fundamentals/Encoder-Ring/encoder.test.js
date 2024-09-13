const encoderRing = require("./index");

test("encoderRing returns a string", () => {
    expect(typeof encoderRing("click here!")).toEqual("string");
});

test("encoderRing output is a string different from the original input", () => {
    const output = encoderRing("click here!");
    expect(typeof output === "string" && output !== "click here!").toBe(true);
});
