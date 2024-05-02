// Create a class called Product with a property for price.
class Product {
    
    price;
    constructor( price) {
        this.price = price;
    }

    // Implement a getter for the price property that returns the formatted price with a currency symbol (e.g., "$").
    get price() { // Getter for price property
        return "$", this.price; // Format price with two decimals
    }

    // Implement a setter for the price property that validates the input value to ensure it's a positive number before assigning it to the internal property.
    set price(value) { // Setter for price property
        if (value > 0) {
            this.price = value;
        } else {
            console.error("Price must be a positive number.");
        }
    }
}

// Create a Product instance and try setting an invalid price using the setter. Observe how the validation prevents incorrect values.
let slippers = new Product(12000);

slippers.price = -50;  // Error message logged by setter

