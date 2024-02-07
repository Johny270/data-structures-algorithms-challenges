// Prompt
/*
  // Here is an array which contains both numbers as well as other arrays,
  // which in turn contain numbers and arrays.
  // Write a recursive function to print out all the numbers in that array
  (And only the numbers)  
*/

// let testArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]]],
//                     [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32], 33];

function printNums(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "number") console.log(arr[i])
        printNums(arr[i]);
    }
}

// Source: A Common-Sense Guide to Data Structures and Algorithms, chapter 10