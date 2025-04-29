const { nanoid } = require('nanoid');

let books = [];

const addBook = ({ name, year, author, summary, publisher, pageCount, readPage, reading }) => {
  const id = nanoid();
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);
  return id;
};

const getAllBooks = () => books.map(({ id, name, publisher }) => ({ id, name, publisher }));

const getBookById = (id) => books.find((book) => book.id === id);

const updateBook = (id, { name, year, author, summary, publisher, pageCount, readPage, reading }) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return false;

  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;

  books[index] = {
    ...books[index],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    updatedAt,
  };

  return true;
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};

