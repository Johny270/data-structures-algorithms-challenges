// Prompt:
/*
    // Given an array of integers, find the first missing positive integer
    // in linear time and constant space. In other words, find the lowest positive
    // integer that does not exist in the array. The array can contain duplicates
    and negative numbers as well.

    // For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
    // You can modify the input array in-place.
*/

function firstMissingInteger(arr) {
	let memory = {};

	for (let i = 0; i < arr.length; i++) {
		memory[arr[i]] = true;
	}

	let currentMissingValue = Math.max(...arr);

	for (let j = 0; j < arr.length; j++) {
		// check cases where arr[j] = 1 and arr[j] > 1
		if (arr[j] === 1) {
			if (!memory[arr[j] + 1] && currentMissingValue >= arr[j] + 1) {
				currentMissingValue = arr[j] + 1;
			}
		} else if (arr[j] > 1) {
			if (!memory[arr[j] - 1] && currentMissingValue > arr[j] - 1) {
				currentMissingValue = arr[j] - 1;
			} else {
				currentMissingValue = arr[j] + 1;
			}
		}
	}

	return currentMissingValue;
}

// console.log(firstMissingInteger([1, 3, 5, -1, 1])) -  Test Case where there are duplicates and
// prev and next value are missing
// Efficiency is O(N);
