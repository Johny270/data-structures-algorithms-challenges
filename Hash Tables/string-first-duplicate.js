// Prompt:
/*  
    // Write a function that accepts an array of strings and returns
    // the first duplicate it finds.
    // The function efficiency should be O(N).
*/

function firstArrayDuplicate(arr) {
    let strObj = {};
    for(let i = 0; i < arr.length; i++) {
        strObj[arr[i]] ? strObj[arr[i]] += 1 : strObj[arr[i]] = 1;
    }

    for(let prop in strObj) {
        if(strObj[prop] !== 1) {
            return prop;
        }
    }
    return "No Duplicates";
}

// What if there is more than 1 duplicate values ?
function firstArrayDuplicate(arr) {
    let strObj = {};
    // create an extra data structure to hold duplicates
    let duplicates = [];
    for(let i = 0; i < arr.length; i++) {
        strObj[arr[i]] ? strObj[arr[i]] += 1 : strObj[arr[i]] = 1;
    }

    for(let prop in strObj) {
        if(strObj[prop] !== 1) {
            duplicates.push[prop];
        }
    }
    return duplicates;
}

// source: A Common-Sense Guide to Data Structures and Algorithms, chapter 08, exercise 2.