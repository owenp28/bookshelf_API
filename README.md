
# Bookshelf API
Bookshelf API is a simple backend application for managing a collection of books. This API allows you to add, view, update, and delete books from the collection.

## Requirements
- Node.js (version 14 or later)
- npm (version 6 or later)

## Set-Up
1. **Clone repository**:
sh
git clone https://stackblitz.com/~/github.com/owenp28/bookshelf_API
cd bookshelf-api

2. *Install dependencies*:

sh
npm install nanoid
npm install @hapi/hapi

3. *Create `.env` file*:
Create a `.env` file in the project root directory and add the following configuration:

env
PORT=9000

4. *Prettier Configuration*:
Make sure the `.prettierrc` file is in the project root directory with the following configuration:

{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}


## Run
1. *Run the application*:
To run the application, use the following command:

sh
npm run start

2. *Run the application in development mode*:
If you want to run the application in development mode with `nodemon`, use the following command:

sh
npm run start-dev


## API Endpoints
### Add Book
- *Method*: POST
- *URL*: `/books`
- *Body Request*:

{
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}


### Display All Books
- *Method*: GET
- *URL*: `/books`

### Display Book Details
- *Method*: GET
- *URL*: `/books/{bookId}`

### Update Book Data
- *Method*: PUT
- *URL*: `/books/{bookId}`
- *Body Request*:

{
  "name": "string",
  "year": "number",
  "author": "string",
  "summary": "string",
  "publisher": "string",
  "pageCount": "number",
  "readPage": "number",
  "reading": "boolean"
}


### Delete Book
- *Method*: DELETE
- *URL*: `/books/{bookId}`

```
