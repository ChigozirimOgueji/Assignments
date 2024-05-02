// Create a class called Book with properties for title, author, and ISBN.
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`);
      }
    
}
// Create a subclass called AudioBook that inherits from Book and adds a property for narrator.

class AudioBook extends Book {
    constructor(title, author, ISBN, narrator) {
      super(title, author, ISBN);
      this.narrator = narrator;
    }

// Implement a method play in the AudioBook class that logs a message indicating the audiobook is playing.

play() {
    console.log(`Playing audiobook: ${this.title}, Narrated by: ${this.narrator}`);
  }
}

// Create an instance of AudioBook and call the inherited method displayInfo (assuming it's defined in Book) to display book information, and then call the play method specific to AudioBook.
const audioBook = new AudioBook("L'Étranger", 'Albert Camus', '9786610151271', 'Johnathan Davis');

audioBook.displayInfo();

// Call the play method specific to AudioBook
audioBook.play();