function find(arr) {
  // You are given an array of a few objects with a string `name` property and a boolean `isPet` property
  // You must return the first object that has the name of "rock". If you cannot find that, you must return `undefined` instead
  // For example, if arr === [{ name: "cat", isPet: true }, { name: "rock", isPet: false }]
  //    then arr.find(obj => obj.name === "rock") would return { name: "rock", isPet: false }
  //         arr.find(obj => obj.name === "lobster") would return undefined
  // Instead of using .find, you must use just a regular for loop.

  let results = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === "rock") {
      results = arr[i];
      break;
    }
  }

  // Define your for loop here
  // return either the found item with a name of "rock" or undefined if no item is found

  return results;
}

module.exports = find;
