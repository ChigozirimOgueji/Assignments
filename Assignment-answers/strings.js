// Write a program that prompts the user for a sentence. Use string methods to convert the sentence to lowercase, remove leading and trailing whitespace, and then count the number of words in the sentence.
const sentence = prompt("Enter a sentence:");

// Convert the sentence to lowercase
const lowercaseSentence = sentence.toLowerCase();

// Remove leading and trailing whitespace
const trimmedSentence = lowercaseSentence.trim();

// Count the number of words in the sentence
const wordsArray = trimmedSentence.split(" ");
const numberOfWords = wordsArray.length;

console.log(`Number of Words in the Sentence: ${numberOfWords}`);


// Implement a function that takes a string as input and checks if it is a palindrome. Use string methods to manipulate the string for comparison.
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  const inputString = prompt("Enter a string to check if it is a palindrome:");
  if (isPalindrome(inputString.toLowerCase())) {
    console.log(`${inputString} is a palindrome.`);
  } else {
    console.log(`${inputString} is not a palindrome.`);
  }