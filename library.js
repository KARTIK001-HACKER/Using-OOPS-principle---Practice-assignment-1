// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`✅ "${this.title}" has been borrowed.`);
        } else {
            console.log(`❌ "${this.title}" is currently unavailable.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`🔄 "${this.title}" has been returned.`);
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`📚 ${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`⚠️ ${this.name} cannot borrow "${book.title}" as it is already borrowed.`);
        }
    }

    return(book) {
        let bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(bookIndex, 1);
            console.log(`✔️ ${this.name} returned "${book.title}".`);
        } else {
            console.log(`⚠️ ${this.name} does not have "${book.title}" to return.`);
        }
    }
}

// Exporting Modules
module.exports = { Book, User };