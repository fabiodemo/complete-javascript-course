'use strict';

// Abstraction => ignoring or hiding detials that don't matter, allowing us to get an overview perspective of what we're implementing, instead messing with details that don't really matter to our implementation
// Encapsulation => Keeping properties and methods private inside the class, so they are not accesible from outside the class. Some methods can be exposed as a public interface (API)
// // Prevent external code from accidentally manipulating internal properties/state
// // State -> Internal data
// // Allows to change internal implementation without the risk of breaking external code
// Inheritance => Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
// Polymorphism => A child class can overwrite a method it inherited from a parent class (it's more complex than that, but we just need to know that for now)

// Objects => istances are instantiated from a class, which functions like a blueprint

// Objects are linked to a prototype object
// // Prototypal inheritance => the prototype contains methods (behavior) that are accessible to all objects linked to that prototype
// // Behavior is delegated to the linked prototype object
// // // Constructor functions
// // // ES6 Classes
// // // Object.create()

// JavaScript doesn't have classes in the usual way of OOP

/** Constructor Functions and the New Operator 

// Constructor Functions, Arrays and Maps should start with capital letter
const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a Constructor function. It will be terrible for performance
  this.calcAge = function () {
    console.log(2048 - this.birthYear);
  };
};

const fabio = new Person('Fabio', 1998);
console.log(fabio);
// 1. New {} is created // {} = object
// 2.  Function is called, this = {}
// 3. {} is linked to a prototype
// 4. Function automatically returns {} //not necessarily empty
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1967);
console.log(matilda, jack);

const jay = 'jay';

console.log(fabio instanceof Person);
// console.log(jay instanceof Person);

/** Prototypes 
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2048 - this.birthYear);
};

fabio.calcAge();
jack.calcAge();

console.log(fabio.__proto__);
console.log(fabio.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(fabio));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// It only has access to the Person, but is not inside the objects (fabio, matilda, jack)
Person.prototype.species = 'Homo Sapiens';
console.log(fabio.species, matilda.species, jack.species);
console.log(fabio.hasOwnProperty('firstName'));
console.log(fabio.hasOwnProperty('species'));
*/

/** Prototypal Inheritance on Built-In Objects 
// Object.prototype
console.log(fabio.__proto__.__proto__);
// Top of scope chain
console.log(fabio.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
const arr = [1, 1, 2, 2, 3, 3, 5, 8];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Prototype is an object
console.log(arr.__proto__.__proto__);

// Prototype inheritance is a method for reusing code
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// This type of method is a bad idea, just an experiment
console.log(arr.unique());

const h1 = document.querySelector('h1');
// Even HTMLElement has a prototype chain
console.log(h1);

// A function is an object and also has a prototype
console.dir(x => x + 1);
*/

/** ES6 Classes 
// Class expression
// const personCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
// jessica.fullName = 'Jessica Davis';

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`hey ${this.firstName}`);
// }
jessica.greet();

// if you want to work with classes:
// 1. Classes are NOT hoisted -> we can't use them before declaration
// 2. Class are first-class citizens -> we can pass them to functions and get them from functions
// 3. Classes are executed in strict mode
const walter = new PersonCl('Walter White', 1965);

// const walter = new PersonCl('Walter', 1965);
*/
/** Setters and Getters 
const account = {
  owner: 'Fábio',
  movements: [200, 520, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

/** Static Methods 
// Use this code inside a Class, using "Static"
// static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
jessica.hey;

PersonCl.hey();
*/

/** Object.create 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/** Inheritance Between "Classes": Constructor Functions 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Child
const Student = function (firstName, birthYear, course) {
  // With call, we can use the this keyword
  Person.call(this, firstName, birthYear); // This regular function call, will result on undefined
  this.course = course;
};

// With this connection, the student will inherit everything from Person
// Linkin prototypes
Student.prototype = Object.create(Person.prototype);

// Object.create should be used before the function below, or we would overwrite the introduce function
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/

/** Inheritance between classes: ES6 classes 
// const personCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// Class is only a layer of abstraction over constructor functions
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Super is the constructor function of the parent class
    // Always need to happend first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I fell more like ${
        2037 - this.birthYear + 50
      }`
    );
  }
}

const martha = new StudentCl('Martha Nielsen', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

/** Inheritance Between "Classes": Object.create 

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
*/

/** Another Class Example */
class Account {
  // 1) Public fields - we don't need to use let ou const
  locale = navigator.language;

  // 2) Private Fields - hash makes this field private (instances)
  #movements = [];
  #pin;

  // 3) Public Methods
  // // All methods we are using until this moment, are Public Methods

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  whithdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this;
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('Helper!');
  }
}

const acc1 = new Account('Fabio', 'R$', 1111);
console.log(acc1);

// Not a good idea, we should create a method for that
// acc1.movements.push(250);
// acc1.movements.push(350);
// acc1.movements.push(-550);
// console.log(acc1.movements);

acc1.deposit(250);
acc1.deposit(350);
acc1.whithdraw(550);
// console.log(acc1.#movements);
acc1.requestLoan(1000);
// console.log(acc1.movements);
// Incorrect way of getting movements - You still can do it without the private method configured, but you know you're doing wrong
// acc1._movements.push(770);
// Correct way of getting movements - since you can't set the movements values
// console.log(acc1.getMovements());

// This shouldn't be accessed outside of the function/class:
// acc1._approveLoan(1000);
// Shouldn't accessable outside of the class as well
// console.log(acc1._pin);

/** Encapsulation: protected properties and methods */
// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// (There is also the static version)

// Private Methods - trying to call outside of function goes wrong
//console.log(acc1.#approveLoan(200));

//Static
Account.helper();

/** Chaining Methods */

// This will work, but it will return nothing from deposit(300), an then will call deposit(500) on undefined.
// Then, we need to return "this" on all the called functions to make a chain
acc1.deposit(300).deposit(500).whithdraw(35).requestLoan(25000).whithdraw(4000);
console.log(acc1.getMovements());
