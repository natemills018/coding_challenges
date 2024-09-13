const isPalindrome = require("./index");

test("isPalindrome returns a boolean", () => {
    expect(typeof isPalindrome("Some string") === "boolean").toBe(true);
});

test("'pizza' is not a palindrome", () => {
    expect(isPalindrome("pizza")).toBe(false);
});

test("'tacocat' is a palindrome", () => {
    expect(isPalindrome("tacocat")).toBe(true);
});
