var booksModule = (function(){
  return{
    createBook : function(title, author, bookNumber){ //create a new book! new books/shelves/libraries will be entered in main.js
      return booksModule[bookNumber] = {
        'title' : title,
        'author' : author,
        'bookNumber' : bookNumber
      },
      console.log(title + " by " + author + " has been added! Book Number: " + bookNumber)
    }
  };
})();

exports.booksModule = booksModule;
