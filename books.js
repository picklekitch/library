var booksModule = (function(){
  return{
    createBook : function(title, author, bookNumber){
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
