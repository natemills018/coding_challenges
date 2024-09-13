# Challenges

[Array Functions](./Array-Functions/README.md)

This is a directory with multiple challenges requiring you to recreate some ES5 & ES6 array methods with just a standard `for` loop. Directions for each challenge is available at the above README link.

[Best Restaurant](./Best-Restaurant/index.js) You are given an array of objects describing some restaurants.

-   Each restaurant has a ratings array with reviews on a scale of 1 to 5.
-   Find the restaurant with the best average review score who has at least 5 ratings
-   Return _just the name_ of the best restaurant
-   Ex: given the below array, you would return the string "Orange Joe's Slurmeria" since it has the highest average score for restaurants with more than 5 total ratings

```js
[
    { name: "Stinky Pete's Pizzeria", ratings: [1, 1.3, 2, 1, 1.5, 2] },
    { name: "Orange Joe's Slurmeria", ratings: [2, 4, 3, 2, 2.5, 2.5] },
    { name: "The Courier's Cantina", ratings: [4, 3, 5] },
];
```

[Capitalize Words](./Capitalize-Words/index.js) You will be given a string of multiple fully-lowercased words, and you must return a string with the first letter of each word capitalized.

-   Ex: If you are given the string `"lorem ipsum dolor sit amet"`, you must return `"Lorem Ipsum Dolor Sit Amet"`

[Counting Occurences](./Counting-Occurences/index.js) You will be given a string, and must return an object with a breakdown of the frequency each letter was used. You may be more familiar with this structure when called a histogram.

-   Ex: If you are given the string `"gabagool"`, you will return an object `{ g: 2, a: 2, b: 1, o: 2, l: 1 }`

[Counting Vowels](./Counting-Vowels/index.js) You will be given a string, and must count the occurrences of vowels within that string.

[Decoder Ring](./Decoder-Ring/index.js) (Intermediate) You will be given a string full of unicode characters with similar-appearances (called homoglyphs) to the latin alphabet, and an object with listings of all the possible substitutions. You must return the string with any character substitutions reversed!

-   Ex. `decoderRing("ýöú wȯո!")` returns `"you won!"`
-   Ex. `decoderRing("frẹė ġíνẹąwáу")` returns `"free giveaway"`

[Encoder Ring](./Encoder-Ring/index.js) (Intermediate) With the opposite intent of the previous challenge, you will be given a plain string and the object of homoglyph substitutions, and you must return a string where characters with available substitutes have a random substitute selected.

-   Ex. `encoderRing("click here!")` returns `"ƈḷìċκ һėré!!"`
-   Ex. `encoderRing("verify your account")` returns `"νẹrìfý ýòùr áċċȯüոt!"`

[Fibonacci Series](./Fibonacci/index.js) The Fibonacci series is an infinite series where each number is the sum of the previous two numbers. The first two numbers in the series are a given 0 and 1. You are given an integer argument of which digit in the series to calculate to, and must return an array of the numbers.

-   Ex: If you are given `5` as your argument, you must calculate the first 5 digits of the series (with 0 and 1 as the first two), and would end up returning `[0, 1, 1, 2, 3]
-   If you were given `9`, you would return `[0, 1, 1, 2, 3, 5, 8, 13, 21]`

[Finding Sum Pairs](./Finding-Sum-Pair/index.js) You will be given an array of positive integers only, and a target number. You must find out if a combination of any two numbers alone sum up to the target number.

-   With an array of `[1, 2, 4]` and a target number of `6`, you would return `true` since 2+4=6
-   With an array of `[1, 2, 4]` and a target number of `7`, you would return `false` since no combination of two numbers matches the target

[FizzBuzz](./FizzBuzz/index.js) You will be given an argument for a stopNum variable. You will create a for loop iterating from 1 to the stopNum, including the stopNum. You will be returning an array of integers and strings.

-   If the number is evenly divisble by 2, push "Cake" into the array.
-   If the number is evenly divisble by 5, push "Pie" into the array.
-   If the number is evenly divisble by BOTH 2 and 5, push "CakeAndPie" into the array.
-   Example return value - if stopNum is 10, the resulting output is:
-   `[1, "Cake", 3, "Cake", "Pie", "Cake", 7, "Cake", 9, "CakeAndPie"]`

[Is-Palindrome](./Is-Palindrome/index.js) will have you take a string, and see if the string is the same reversed as it is normally, returning `true` or `false`.

[Mirror-Case](./Mirror-Case/index.js) You will be given a string with mixed uppercase and lowercase letters, and you must return a string where all of the casing is flipped around

-   Example: given an input of "HeLLo wOrLD", you would return `"hEllO WoRld"`

[Reverse-String](./Reverse-String/index.js) will give you a string, and have you return the reversed value.

[Summing-Array](./Summing-Array/index.js) will give you an array of positive integers only, and you must return the sum of all elements in the array.
