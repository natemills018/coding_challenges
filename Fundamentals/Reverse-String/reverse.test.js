const reverser = require("./index");

test("'pizza' reversed is 'azzip'", () => {
    expect(reverser("pizza")).toBe("azzip");
});

test("'pizza' reversed does not equal 'pizza'", () => {
    expect(reverser("pizza")).not.toBe("pizza");
});
