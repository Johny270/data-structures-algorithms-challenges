/*
    Given a sorted array of n integers and a target value, determine if the target
    exists in the array in logarithmic time using binary search algorithm.
*/

function binarySearch(arr, target) {
    let lower = 0;
    let upper = arr.length;
    let midpoint;

    while(lower <= upper) {
        midpoint = (lower + upper) / 2
        if(target === arr[midpoint]) {
            return midpoint;
        } else if(target > arr[midpoint]) {
            lower = midpoint + 1;
        } else {
            upper = midpoint - 1;
        }
    }
    return null;
}