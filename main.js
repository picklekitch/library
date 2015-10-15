var library = require('./library.js'); //require all the other modules
var shelf = require('./shelves.js');
var book = require('./books.js');

//adding books
book.booksModule.createBook('The Complete Calvin & Hobbes', 'Bill Waterson', '1');
book.booksModule.createBook('Anna Karenina', 'Leo Tolstoy', '2');
book.booksModule.createBook('Zen and the Art of Motorcycle Maintenance', 'Robert Pirsig', '3');

//creating shelves, add/deleting books to/from shelves, deleting shelves
shelf.shelfModule.createShelf('shelf1');
shelf.shelfModule.addBook('1', 'shelf1');
shelf.shelfModule.createShelf('shelf2');
shelf.shelfModule.addBook('3', 'shelf2');
shelf.shelfModule.addBook('2', 'shelf2');
shelf.shelfModule.removeBook('2', 'shelf2');
shelf.shelfModule.removeBook('3', 'shelf2');
shelf.shelfModule.deleteShelf('shelf2');

//create a library containing shelves (add or remove shelves from the library)
library.libraryModule.addShelf('shelf1');
library.libraryModule.addShelf('shelf2');
library.libraryModule.removeShelf('shelf2');
