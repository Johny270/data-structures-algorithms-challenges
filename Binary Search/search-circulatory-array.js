// Search an element in a circulatory sorted array
/*
    Given a circulatory sorted integer array, search an element in it.
    Assume there are no duplicates in the array, and the rotation is in the
    anti-clockwise direction.
*/
function searchArray(arr, target) {
    let low = 0;
    let high =  arr.length;
    let mid;

    while(low <= high) {
        mid = (low + high) / 2
        if(target === arr[mid]) {
            return mid;
        }
        
        if(arr[mid] <= arr[high]) {
            if(target > arr[mid] && target <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1;
            }
        } else {
            if(target >= arr[low] && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1;
}