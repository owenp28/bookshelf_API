# bookshelf_API
Project Bookshelf API adalah sebuah aplikasi backend yang dirancang untuk mengelola data buku dengan menggunakan API. Aplikasi ini memiliki beberapa fitur utama, seperti menambahkan buku baru, menampilkan daftar buku, menampilkan detail buku, mengubah data buku, dan menghapus buku. 

```markdown
# Bookshelf API

Bookshelf API adalah aplikasi backend sederhana untuk mengelola koleksi buku. API ini memungkinkan Anda
untuk menambahkan, menampilkan, memperbarui, dan menghapus buku dari koleksi.

## Requirements

- Node.js (versi 14 atau lebih baru)
- npm (versi 6 atau lebih baru)

## Set-Up

1. **Clone repository**:
   ```sh
   git clone https://stackblitz.com/~/github.com/owenp28/bookshelf_API
   cd bookshelf-api
   ```

2. **Install dependencies**:
   ```sh
   npm install nanoid
   npm install @hapi/hapi
   ```

3. **Buat file `.env`**:
   Buat file `.env` di root direktori proyek dan tambahkan konfigurasi berikut:
   ```env
   PORT=9000
   ```

4. **Konfigurasi Prettier**:
   Pastikan file `.prettierrc` sudah ada di root direktori proyek dengan konfigurasi berikut:
   ```json
   {
     "semi": true,
     "singleQuote": true,
     "printWidth": 80,
     "tabWidth": 2
   }
   ```

## Run

1. **Jalankan aplikasi**:
   Untuk menjalankan aplikasi, gunakan perintah berikut:
   ```sh
   npm run start
   ```

2. **Jalankan aplikasi dalam mode pengembangan**:
   Jika Anda ingin menjalankan aplikasi dalam mode pengembangan dengan `nodemon`, gunakan perintah berikut:
   ```sh
   npm run start-dev
   ```

## API Endpoints

### Menambahkan Buku
- **Method**: POST
- **URL**: `/books`
- **Body Request**:
  ```json
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
  ```

### Menampilkan Seluruh Buku
- **Method**: GET
- **URL**: `/books`

### Menampilkan Detail Buku
- **Method**: GET
- **URL**: `/books/{bookId}`

### Mengubah Data Buku
- **Method**: PUT
- **URL**: `/books/{bookId}`
- **Body Request**:
  ```json
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
  ```

### Menghapus Buku
- **Method**: DELETE
- **URL**: `/books/{bookId}`

