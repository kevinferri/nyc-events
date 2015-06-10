module.exports = (function() {
  'use strict';

  var router = require('express').Router();
  var books = require('./resources/books.js');

  router.get('/books', books.getBooks);
  router.get('/books/search', books.searchBooks);
  
  return router;

})();