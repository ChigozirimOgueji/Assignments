//ASSIGNMENTS

// Create a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
  }
  const result = sum(1, 2);
    console.log(result); // 3

// Write a function to calculate the factorial of a number (the product of all positive integers less than or equal to that number).
function factorial(num){
      let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5))

// Implement a function that checks if a string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
    // Convert the string to lowercase and remove all spaces.
    str = str.toLowerCase().replace(/ /g, "");
  
    // Iterate over the string and compare each character to its corresponding character from the end of the string.
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
  
    // If the loop completes without returning false, the string is a palindrome.
    return true;
  }
  const result2 = isPalindrome("hannah");
console.log(result); // true



