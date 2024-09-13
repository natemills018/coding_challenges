const decoderRing = require("./index");

test("decoderRing returns a string", () => {
    expect(typeof decoderRing("ýöú wȯո!")).toEqual("string");
});

test("decoderRing output is not the original input", () => {
    expect(decoderRing("ýöú wȯո!") !== "ýöú wȯո!").toBe(true);
});

test(`decoderRing("ýöú wȯո!") returns "you won!"`, () => {
    expect(decoderRing("ýöú wȯո!")).toEqual("you won!");
});

test(`decoderRing("frẹė ġíνẹąwáу") returns "free giveaway"`, () => {
    expect(decoderRing("frẹė ġíνẹąwáу")).toEqual("free giveaway");
});
