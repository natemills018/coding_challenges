const bestRestaurant = require("./index");

test("bestRestaurant returns a string", () => {
    expect(
        typeof bestRestaurant([
            { name: "Stinky Pete's Pizzeria", ratings: [1, 1.3, 2, 1, 1.5, 2] },
            { name: "Orange Joe's Slurmeria", ratings: [2, 4, 3, 2, 2.5, 2.5] },
            { name: "The Courier's Cantina", ratings: [4, 3, 5] }
        ]) === "string"
    ).toBe(true);
});

test(`With a 4.5 average, we return "Orange Joe's Slurmeria"`, () => {
    expect(
        bestRestaurant([
            { name: "Stinky Pete's Pizzeria", ratings: [1, 1.3, 2, 1, 1.5, 2] },
            { name: "Orange Joe's Slurmeria", ratings: [5, 5, 5, 5, 5, 4, 4, 4, 4, 4] },
            { name: "The Drunken Huntsman", ratings: [2, 4, 3, 2, 2.5, 2.5] },
            { name: "The Courier's Cantina", ratings: [4, 3, 5] }
        ])
    ).toEqual("Orange Joe's Slurmeria");
});

test(`With a 5.0 average, we return "The Drunken Huntsman"`, () => {
    expect(
        bestRestaurant([
            { name: "Stinky Pete's Pizzeria", ratings: [1, 1.3, 2, 1, 1.5, 2] },
            { name: "Orange Joe's Slurmeria", ratings: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2] },
            { name: "The Drunken Huntsman", ratings: [5, 5, 5, 5, 5, 5] },
            { name: "The Courier's Cantina", ratings: [4, 3, 5] }
        ])
    ).toEqual("The Drunken Huntsman");
});
