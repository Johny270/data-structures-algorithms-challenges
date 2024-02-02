// Prompt:
/*
    // Given an array of integers, return a new array such that
    // each element at index i of the new array is the product
    // of all the numbers in the original array except the one at i.

    // For example, if our input was [1, 2, 3, 4, 5], the expected
    // output would be [120, 60, 40, 30, 24]

    // What if you can't use division ?
*/
// JavaScript Solution

// Implementation of a Queue
class Queue {
    constructor() {
        this.elements = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements.push(element);
        this.tail++
    }
    dequeue() {
        const item = this.elements.shift(this.head);
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

function indexProducts(arr) {
    let queue = new Queue();
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        queue.enqueue(arr.filter(item => item !== arr[i]));
    }
    let product = 1;
    
    while(queue.length !== 0) {
        const currItem = queue.dequeue();
        for(let k = 0; k < currItem.length; k++) {
            product *= currItem[k];
        }
        result.push(product);
        product = 1;
    }

    return result;
}