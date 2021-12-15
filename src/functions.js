/**
 * @module Functions
 */

/**
 * Plus numbers (n1 + n2)
 * @param {number} n1 First Number 
 * @param {number} n2 Second Number
 * @returns {number} Return a Total Result
 */
function plusNumber(n1, n2) {
  return n1 + n2;
}

/**
 * Rest numbers (n1 + n2)
 * @param {number} n1 First Number 
 * @param {number} n2 Second Number
 * @returns {string} Return a Total Result of Rest in string
 */
const restNumber = (n1, n2) => `The total rest is: ${n1 - n2}`;

/**
 * Say name and age
 * @param {{ name: {string} }} obj Object of person
 * @param {number} age Age of person
 * @returns {string}
 */
const objNumber = (obj, age) => `My name is: ${obj.name}, and i have ${age} years old.`