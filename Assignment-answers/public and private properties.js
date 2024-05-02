// Create a class called Car with public properties for make, model, and year.

class Car {
    make;
    model;
    year;
    #mileage;
   
    constructor(make, model, year) {
        this.make = make; 
        this.model = model; 
        this.year = year;
        
        // Add a private property named mileage using the # symbol (ES6+).

        this.#mileage = "14.3 to 14.4 KM/L"
    }

}


// Implement a public method getMileage that returns the value of the private mileage property.
getMileage(); { 
    return this.#mileage;
}


// In your code, create a Car instance and try to directly access the mileage property (it should not be accessible). Then, call the getMileage method to retrieve the private property's value.
const car = new Car('Rolls Royce', 'Ghost', 2020);

// Try to directly access the private mileage property (should fail)
console.log(car.mileage); // undefined

// Call the public getMileage method to retrieve the private property's value
console.log(car.getMileage()); // 0
