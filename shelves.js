var book = require('./books.js');

var shelfModule = (function(){
  return {
    createShelf : function(shelfName){
      return shelfModule[shelfName] = {
        'shelfName' : shelfName,
        'shelfbooks' : [ ]
      };
    },
    deleteShelf : function(shelfName){
      delete shelfModule[shelfName],
      console.log(shelfName + " has been deleted from the shelves.");
    },
    addBook : function(bookNumber, shelfName){
      return shelfName[book.bookId] = bookNumber,
      console.log("Book Number " + bookNumber + " has been added to " + shelfName);
    },
    removeBook : function(bookNumber, shelfName){
      delete shelfName[book.bookId],
      console.log("Book Number " + bookNumber + " has been removed from " + shelfName);
    }
  };
})();

exports.shelfModule = shelfModule;
