// Palindrome Number
/*
    Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

const isPalindrome = function(x) {
    let reverseX = 0
    let xCopy = x
    if(xCopy < 0) return false

    while(xCopy > 0) {
        // get rightmost number
        let rightMost = xCopy % 10
        // update reverseX
        reverseX = reverseX * 10 + rightMost
        // update xCopy
        xCopy = Math.floor(xCopy / 10)
    }
    if(x === reverseX) {
        return true 
    } else return false
}

// source: leetcode