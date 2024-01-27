/*
    // Write a function that returns the intersection of two arrays.
    // The intersection is a third array that contains all values within
    // The first two arrays.
    // The function should run in O(N) time.
*/

function arraysIntersection(arr1, arr2) {
    let smlArr = [];
    let lrgArr = [];
    let smlArrDict = {};
    let intersection = [];

    if(arr1.length < arr2.length) {
        smlArr = arr1;
        lrgArr = arr2;
    } else {
        smlArr = arr2;
        lrgArr = arr1;
    }

    for(let i = 0; i < smlArr.length; i++) {
        smlArrDict[smlArr[i]] = true;
    }

    for(let j = 0; j < lrgArr.length; j++) {
        if(smlArrDict[lrgArr[j]]) {
            intersection.push(lrgArr[j]);
        }
    }
    return intersection;
}

// source: A Common-Sense Guide to Data Structures and Algorithms, chapter 08, exercise 1.