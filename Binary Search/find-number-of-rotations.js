// Find the number of rotations in a circulatory sorted array
/*
    Given a circulatory sorted integer array, find the total number of times the array is rotated.
    Assume there are no duplicates in the array, and the rotation is anti-clockwise direction.
*/

function rotation(arr) {
    let lower = 0;
    let upper = arr.length;
    let midpoint, prev, next;
    while(lower <= upper) {
        if(arr[lower] <= arr[upper]) {
            return lower;
        }
        midpoint = (lower + upper) / 2
        prev = (midpoint - 1) % arr.length;
        next = (midpoint + 1) % arr.length

        if(arr[midpoint] <= arr[next] && arr[midpoint] <= arr[prev]) {
            return midpoint;
        } else if(arr[midpoint] >= arr[next]) {
            prev = midpoint - 1;
        } else if(arr[midpoint] <= arr[prev]) {
            next = midpoint + 1;
        }
    }
    return -1;
}