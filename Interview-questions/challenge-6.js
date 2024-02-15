// Prompt: Staircase problem
/*

*/

function numOfSteps(n) {
    if(n < 0) {
        return 0
    }else if (n == 1 || n == 0) {
        return 1
    } else {
        return numOfSteps(n - 1) + numOfSteps(n - 2) + numOfSteps(n - 3);
    }
}

console.log(numOfSteps(15));