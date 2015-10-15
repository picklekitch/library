var shelf = require('./shelves.js');

var libraryModule = (function(){
  return {
    addShelf : function(shelfName){
      return libraryModule[shelfName.name] = shelfName,
      console.log(shelfName + " has been added to the library!");
    },
    removeShelf : function(shelfName){
      delete libraryModule[shelfName.name],
      console.log(shelfName + " has been removed from the library.")
    }
  };
})();

exports.libraryModule = libraryModule;
