/**
 * @module Objects
 */

/**
 * This is a object of person
 * @type {Object}
 */
const obj = {
  name: "Ruth",
  age: 21,
  sport: "Rugby"
}

/**
 * Object defining types
 * @type {{ name: string, age: number, sport: string }}
 */
const obj2 = {
  name: "John",
  age: 25,
  sport: "Softball"
}

/**
 * Object defining types, and one more than one type
 * @type {{ name: string, age: number|string, sport: string }}
 */
const obj3 = {
  name: "Cia",
  age: "23",
  sport: "Soccer"
}