const booksService = require('./books.service');

const addBook = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const bookId = booksService.addBook({
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: { bookId },
  }).code(201);
};

const getAllBooks = (request, h) => {
  const books = booksService.getAllBooks();
  return h.response({
    status: 'success',
    data: { books },
  }).code(200);
};

const getBookById = (request, h) => {
  const { bookId } = request.params;
  const book = booksService.getBookById(bookId);

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    data: { book },
  }).code(200);
};

const updateBook = (request, h) => {
  const { bookId } = request.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const updated = booksService.updateBook(bookId, {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  });

  if (!updated) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

const deleteBook = (request, h) => {
  const { bookId } = request.params;
  const deleted = booksService.deleteBook(bookId);

  if (!deleted) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
