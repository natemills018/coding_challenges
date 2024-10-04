function array_find(arr) {
    // You are given an array of a few objects with a string `name` property and a boolean `isPet` property
    // You must return the index position of the first object that has the name of "rock".
    // If you cannot find that, you must return `-1` instead
    // For example, if given the below array
    // [{ name: "cat", isPet: true }, { name: "dog", isPet: true }, { name: "rock", isPet: false }]
    // arr.findIndex(obj => obj.name === "rock") // returns 2
    // arr.findIndex(obj => obj.name === "lobster") // returns -1 since there is no such element

    let results = null;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i].name === 'rock') {
            results = arr[i][0]
        } else {
            return -1;
        }
        
    }

    // Define your for loop here
    // return either the index position of the found item with a name of "rock" or -1 if no item is found

    return results;
}

module.exports = array_find;
