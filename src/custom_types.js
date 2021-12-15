/**
 * @module CustomTypes
 */

// Model of type for user's
/**
 * User
 * @typedef {Object} User
 * @property {string} name Name of user
 * @property {number} [age] Age of user, age is optional with [ ... ]
 */

/**
 * @type User
 */
const user_one = {
  name: "jhon",
  age: 22
}

/**
 * @type User
 */
const user_two = {
  name: "ruth"  // not errors here, bc age it's optional
}