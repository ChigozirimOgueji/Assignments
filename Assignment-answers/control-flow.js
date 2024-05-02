//ASSIGNMENTS

// Write an if/else statement to check if a user is eligible to vote based on their age (consider voting age in your country).
let userAge = 19;

if (userAge <= 18 ){
    console.log("You are not eligible to vote");
}
else{
    console.log("You are eligible to vote");
}


// Use a for loop to print all the even numbers from 1 to 10.
for(i= 0; i < 10; i++){
    console.log("Even numbers from 1-10 are", i);
    i % 2 == 0
}


// Create a while loop that iterates as long as a user enters a specific keyword (e.g., "quit").
let userInput = prompt("Enter a number (or 'quit' to stop): ");
let i = 0
while (i < 100) {
    console.log("i: ", i);
 userInput = prompt("Enter another number (or 'quit' to stop): ");
}