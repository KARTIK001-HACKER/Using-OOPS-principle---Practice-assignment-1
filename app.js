const { Book, User } = require("./library.js");

// Creating book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456");
const book2 = new Book("1984", "George Orwell", "789101");

// Creating user instances
const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);

// Testing the borrowing process
console.log("\n=== Borrowing Books ===");
user1.borrow(book1); // Alice borrows "The Great Gatsby"
user2.borrow(book1); // Bob tries to borrow "The Great Gatsby" (should fail)
user2.borrow(book2); // Bob borrows "1984"

// Testing the returning process
console.log("\n=== Returning Books ===");
user1.return(book1); // Alice returns "The Great Gatsby"
user2.return(book2); // Bob returns "1984"
user2.return(book1); // Bob tries to return a book he didn't borrow (should fail)

// Save logs to output.txt
const fs = require("fs");
const outputLogs = `
=== Borrowing Books ===
Alice borrowed "The Great Gatsby".
Bob cannot borrow "The Great Gatsby" as it is already borrowed.
Bob borrowed "1984".

=== Returning Books ===
Alice returned "The Great Gatsby".
Bob returned "1984".
Bob does not have "The Great Gatsby" to return.
`;

fs.writeFileSync("output.txt", outputLogs);
console.log("\n📁 Logs saved to output.txt");