//constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.dob = new Date(dob)
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear()
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

//Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
  }

  getBirthYear() {
    return this.dob.getFullYear()
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// instantiate object
const person1 = new Person("john", "Doe", "4-3-1980")
const person2 = new Person("brahim", "jarallah", "2-19-1989")

// console.log(person2.dob.getFullYear())
console.log(person2.getBirthYear())
console.log(person2.getFullName())
console.log(person2)
