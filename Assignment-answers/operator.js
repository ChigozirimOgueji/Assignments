//ASSIGNMENTS

// Write expressions using arithmetic operators to calculate the area of a rectangle and the volume of a cube.

let area = length * width
let volume = length * width * height

// Compare two numbers using different comparison operators and print the results.
let number1 = 22;
let number2 = 5;

let firstComparison  = number1 === number2;
let secondComparison = number1 >= number2;

console.log(firstComparison);
console.log(secondComparison);

// Combine logical operators to create conditional statements that check if a number is even or odd. //use control flow instead

let number = 9;
if (number % 2 == 0) {
    console.log( "number is even")
  } else {
    console.log("number is odd") 
  }
// or you could useconsole.log(number % 2 == 0 ? "even" : "odd");


// Experiment with increment and decrement operators to modify variable values.
let x = 1;
let y = 1++;
let z= 1--;