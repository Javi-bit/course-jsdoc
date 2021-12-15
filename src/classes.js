/**
 * Class to create a person
 * @example
 * const newPerson = new Person({ name: 'john', age: 20}, 'French')
 * newPerson.getMessageOfPersonPasses()
 * @see https://www.youtube.com/
 * @todo Do more methods
 */
class Person {
  /**
   * @param {{ name: string, age: number|string }} user User Information
   * @param {string} country Country of user
   */
  constructor(user, country) {
    this.name = user.name,
    this.age = user.age,
    this.country = country   
  }

  /**
   * Get information of person in console.log()
   * @returns {void}
   */
  getMessageOfPersonPasses() {
    if (this.age < 20) {
      console.log()
      console.log(` - Hi ${this.name}, pass free!!`)
    }
    else {
      console.log()
      console.log(` - Hi ${this.name}, pay me NOW!!`)
    }
  }
}

/**
 * Know more about type of this const {@link Person}
 * @type Person
 */
const person_one = new Person({
  name: 'Matt', 
  age: 18
}, 'Switzerland')
person_one.getMessageOfPersonPasses()

/**
 * Know more about type of this const {@link Person}
 * @type Person
 */
const person_two = new Person({
  name: 'Neth', 
  age: 31
}, 'USA')
person_two.getMessageOfPersonPasses()