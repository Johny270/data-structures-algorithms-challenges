// Prompt:
/*
    // Write a function that returns the first non-duplicate character
    // in a string, with an efficiency of O(N);
*/

function nonDuplicate(str) {
    let strObj = {};

    for(let i = 0; i < str.length; i++) {
        strObj[str[i]] ? strObj[str[i]] += 1 : strObj[str[i]] = 1;
    }

    for(const prop in strObj) {
        if(strObj[prop] === 1) return prop;
    }

    return "Done";
}

// Test:
// nonDuplicate("minimum")

// source: A Common-Sense Guide to Data Structures and Algorithms, chapter 08, exercise 4.