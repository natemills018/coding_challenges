# Array Challenges

### You are tasked with rewriting some of the more common ES5 and ES6 array methods in the form of a vanilla `for ( ; ; )` loop. The challenges are as follows:

---

[every](./every/index.js)

-   You are given an array of a few different strings.
-   You must return a boolean on whether or not that array has every string being at least 9 characters or more in length
-   For example, given the below array, the `.every` function would return `false` since not all strings match that condition.

```js
["restaurant", "spaghetti", "antidisestablishmentarianism", "cat"].every((word) => word.length >= 9);
```

-   Instead of using .every, you must use just a regular for loop.

---

[filter](./filter/index.js)

-   You are given an array of a few objects with a string `name` property and a boolean `isPet` property
-   You must return an array of all of the objects that are pets
-   For example, if given the below array, the `.filter((obj) => obj.isPet)` function would return an array of `[{ name: "cat", isPet: true }, { name: "dog", isPet: true }]`

```js
[
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "rock", isPet: false },
];
```

-   Instead of using .filter, you must use just a regular for loop.

---

[find](./find/index.js)

-   You are given an array of a few objects with a string `name` property and a boolean `isPet` property
-   You must return the first object that has the name of "rock". If you cannot find that, you must return `undefined` instead
-   For example, if given the below array

```js
[
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "rock", isPet: false },
];
```

-   `arr.find(obj => obj.name === "rock")` would return `{ name: "rock", isPet: false }`
-   `arr.find(obj => obj.name === "lobster")` would return `undefined`
-   Instead of using .find, you must use just a regular for loop.

---

[findIndex](./findIndex/index.js)

-   You are given an array of a few objects with a string `name` property and a boolean `isPet` property
-   You must return the index position of the first object that has the name of "rock".
-   If you cannot find that, you must return `-1` instead
-   For example, if given the below array

```js
[
    { name: "cat", isPet: true },
    { name: "dog", isPet: true },
    { name: "rock", isPet: false },
];
```

-   `arr.findIndex(obj => obj.name === "rock")` // returns `2`
-   `arr.findIndex(obj => obj.name === "lobster")` // returns `-1` since there is no such element
-   Instead of using .findIndex, you must use just a regular for loop.
