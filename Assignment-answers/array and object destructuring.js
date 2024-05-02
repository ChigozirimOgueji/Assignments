// Given an array const colors = ["red", "green", "blue", "yellow"], destructure the first two elements (red and green) into separate variables.

const colors = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor] = colors;

console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"


// Destructure the last element (yellow) from the colors array and assign it to a variable named lastColor.
const [, , , lastColor] = colors;

console.log(lastColor); // Output: "yellow"

// Create an array with three elements (name, age, city) and destructure it into separate variables using default values for age (25) and city ("Unknown").

const [name1 = "Joyce", age1 = 20, city = "Enugu"] = person;

console.log(name); // Output: "Alice"
console.log(age); // Output: 25
console.log(city); // Output: "New York"

// Given an object const person = { name: "Alice", age: 30, job: "Developer" }, destructure name and age into separate variables.
const person =  {name: "Alice", age: 30, job: "Developer" }
const [name, age] = person;



console.log(name); // Output: Alice
console.log(age); // Output: 30


// Destructure the job property from the person object and rename it to occupation using destructuring.

const {job: occupation}  = person;

console.log(occupation); // Output: Developer
// Create an object with properties firstName, lastName, and fullName (computed property derived from the first and last names). Destructure only the firstName and lastName properties into separate variables.
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
      return this.firstName + "" +this.lastName;
    }
  };
  
  const { firstName, lastName } = person;
  
  console.log(firstName); // Output: John
  console.log(lastName); // Output: Doe