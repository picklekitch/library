var book = require('./books.js'); //access vars from books.js in shelves.js

var shelfModule = (function(){
  return {
    createShelf : function(shelfName){ //make a new shelf
      return shelfModule[shelfName] = {
        'shelfName' : shelfName,
        'shelfbooks' : [ ]
      };
    },
    deleteShelf : function(shelfName){ //delete a shelf
      delete shelfModule[shelfName],
      console.log(shelfName + " has been deleted from the shelves.");
    },
    addBook : function(bookNumber, shelfName){ //add a book to a shelf
      return shelfName[book.bookId] = bookNumber,
      console.log("Book Number " + bookNumber + " has been added to " + shelfName);
    },
    removeBook : function(bookNumber, shelfName){ //remove a book from a shelf
      delete shelfName[book.bookId],
      console.log("Book Number " + bookNumber + " has been removed from " + shelfName);
    }
  };
})();

exports.shelfModule = shelfModule;
