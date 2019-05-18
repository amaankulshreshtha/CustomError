/**
 * 
 * @param {string} stack The stack of the error
 * @description Converting the exisiting string trace into an array
 * @description Removing the first 2 elements of the array
 * @returns value of this.stack
 */

const defineStack = (stack) => {
  // Converting the exisiting string trace into an array
  stack = stack.split('\n');

  // Removing the first 2 elements of the array
  for (let i = 0; i < 3; ++i) {
    stack.shift();
  }

  // Returning the value of this.stack to the required stack trace
  return stack.join('\n').trim();
}

export default defineStack;