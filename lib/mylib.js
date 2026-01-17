/**
 * Simple calculator library providing basic arithmetic operations.
 * All functions validate inputs and throw errors for invalid operations.
 * @module calculator
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
* @throws {Error} Throws "Inputs must be numbers" if either parameter is not a number
 * @example add(5, 3); // returns 8
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The number to subtract from
 * @param {number} b - The number to subtract
 * @returns {number} The difference of a and b
 * @throws {Error} Throws "Inputs must be numbers" if either parameter is not a number
 * @example subtract(10, 4); // returns 6
 */
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a - b;
}


/**
 * Multiplies two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 * @throws {Error} Throws "Inputs must be numbers" if either parameter is not a number
 * @example multiply(6, 7); // returns 42
 */
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 * @throws {Error} Throws "Inputs must be numbers" if either parameter is not a number
 * @throws {Error} Throws "Division by zero" if b is zero
 * @example divide(15, 3); // returns 5
 */
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

module.exports = {add, subtract, multiply, divide};