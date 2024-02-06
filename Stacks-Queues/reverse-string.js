// Prompt:
/*
    Write a function that uses a stack to reverse a string
*/

// Stack class implementation
class Stack {
	constructor() {
		this.elements = [];
		this.top = 0;
	}
	push(element) {
		this.elements[this.top] = element;
		this.top = this.top + 1;
	}
	pop() {
		if (this.isEmpty() === false) {
			this.top = this.top - 1;
			return this.elements.pop();
		}
	}
	peek() {
		return this.elements[this.top - 1];
	}
	length() {
		return this.top;
	}
	isEmpty() {
		return this.length === 0;
	}
}

function reverseStringWithStack(str) {
	let result = '';

	let strStack = new Stack();
	str.forEach((char) => strStack.push(str[char]));

	while (strStack.length() !== 0) {
		let curr = strStack.pop();
		result += curr;
	}

	return result;
}

// source: A common-sense guide to data structures and algorithms, chapter 09, Exercise #4
