const booksData = require('./books.data');

const addBook = (book) => booksData.addBook(book);
const getAllBooks = () => booksData.getAllBooks();
const getBookById = (id) => booksData.getBookById(id);
const updateBook = (id, book) => booksData.updateBook(id, book);
const deleteBook = (id) => booksData.deleteBook(id);

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
