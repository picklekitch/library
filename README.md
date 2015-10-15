# Code Fellows JavaScript Development Accelerator Code Challenge: modular library model.
# A library contains shelves; shelves contain books; books have an author and title. The purpose of this program is to build a modular library model based the previous sentence.

Books can be created in the book module (no need to delete them once they've been created because if you want to get rid of the book all you do is remove it from the shelf and then it is no longer in the library) with a title and author.

Shelves can be created and deleted in the shelf module, additionally, books can be added to and removed from shelves within the shelf module (so shelves.js must be able to access books.js).

The library module adds and removes shelfs to and from the library (library.js must be able to access shelves.js).
