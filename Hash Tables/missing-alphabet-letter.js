// Prompt:
/*
    // Write a function that accepts a string that contains all the letters
    // of the alphabet except one and returns the missing letter.
    // The function should run in O(N) time. 
*/

function missingLetter(str) {
    let strObj = {};
    let upStr = str.toUpperCase();
    
    for(let i = 0; i < upStr.length; i++) {
        strObj[upStr[i]] ? strObj[upStr[i]] += 1 : strObj[upStr[i]] = 1;
    }
    
    let lettersOfAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for(let j = 0; j < lettersOfAlphabet.length; j++) {
        if(!strObj[lettersOfAlphabet[j]]) {
            return lettersOfAlphabet[j];
        }
    }
    return "No Missing Letter";
}

// Test:
// missingLetter("The quick brown box jumps over a lazy dog");

// source: A Common-Sense Guide to Data Structures and Algorithms, chapter 08, exercise 3.