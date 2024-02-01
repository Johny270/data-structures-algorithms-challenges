// Prompt:
/*
    // Given a list of numbers and a number k, return wether
    // any two numbers from the list add up to k.

    // For example, given [10, 15, 3, 7] and k of 17, return
    true since 10 + 7 is 17.

    // Bonus: Can you do this in one pass ?
*/

// JavaScript solution:
function isSum(arr, k) {
    let memory = {};
    let diffFromK = 0;

    for(let i = 0; i < arr.length; i++) {
        diffFromK = k - arr[i];

        if(diffFromK in memory) {
            return true;
        } else {
            memory[arr[i]] = i;
        }
    }
    return false;
}

// Working solution with O(N) efficiency taking advantage of O(1) lookup of objects