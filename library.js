var shelf = require('./shelves.js'); //access the shelves module from library

var libraryModule = (function(){
  return {
    addShelf : function(shelfName){ //add a shelf to the library
      return libraryModule[shelfName.name] = shelfName,
      console.log(shelfName + " has been added to the library!");
    },
    removeShelf : function(shelfName){ //remove a shelf from the library
      delete libraryModule[shelfName.name],
      console.log(shelfName + " has been removed from the library.")
    }
  };
})();

exports.libraryModule = libraryModule;
