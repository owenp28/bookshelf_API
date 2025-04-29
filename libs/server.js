const Hapi = require('@hapi/hapi');
const booksController = require('../books/books.controller');
const { port } = require('../config/environments');

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: 'localhost',
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Welcome to the Bookshelf API!';
      },
    },
    {
      method: 'POST',
      path: '/books',
      handler: booksController.addBook,
    },
    {
      method: 'GET',
      path: '/books',
      handler: booksController.getAllBooks,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: booksController.getBookById,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: booksController.updateBook,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: booksController.deleteBook,
    },
  ]);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
