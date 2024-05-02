//ASIGNMENTS

// Write a program that creates an array of your favorite movies and then iterates through the array to print each movie title.
const favoriteMovies =["Vindication", "Love's long journey", "Love comes softly", "Problem child1", "Problem child2"]

for (i= 0 ; i< favoriteMovies.length ; i++) {
    console.log(favoriteMovies[i]);
}



// Implement a function that takes an array of numbers and returns the sum of all the elements
 
function sumArray(array) {
    sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

const array = [1, 2, 3, 4, 5]
console.log(sumArray(array));


// Create a program that allows users to add items to a shopping cart (array) and then displays the list of items in the cart.
const shoppingCart = [];

function addItemToCart(item) {
    shoppingCart.push(item);
    console.log(`${item} has been added to the shopping cart.`);
}

function displayShoppingCart() {
    if (shoppingCart.length === 0) {
        console.log("Your shopping cart is empty.");
    } else {
        console.log("Items in your shopping cart:");
        shoppingCart.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

addItemToCart("Apple");
addItemToCart("Banana");
addItemToCart("Milk");

displayShoppingCart();


// Explore array methods like slice, splice, and sort to manipulate and organize array elements in different ways.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];


const citrus = fruits.slice(1, 3);
fruits.splice(2, 2);// At position 2, remove 2 items: 

fruits.splice(2, 0, "Lemon", "Kiwi");//// At position 2, add 2 elements: 

fruits.sort();//sorts an array alphabetically
