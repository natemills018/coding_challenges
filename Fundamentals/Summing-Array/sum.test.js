const summingArray = require("./index");

test("[1, 2, 3, 4] sums up to ", () => {
    expect(summingArray([1, 2, 3, 4])).toBe(10);
});

test("[1, 2, 3, 4, 5, 6, 7, 8] sums up to ", () => {
    expect(summingArray([1, 2, 3, 4, 5, 6, 7, 8])).toBe(36);
});
