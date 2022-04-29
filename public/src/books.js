function findAuthorById(authors, id) {
   return authors.find((author) => author.id === id)
    
    
}

function findBookById(books, id) {
    return books.find((book) => book.id === id)
    
    
}

function partitionBooksByBorrowedStatus(books) {
    const borrowed = books.filter((book) => book.borrows[0].returned == false)
    const borrowedStatus = books.filter((book) => book.borrows[0].returned == true)
    return [borrowed, borrowedStatus];
    
}

function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow) => {
       
        const account = accounts.find((account) => borrow.id === account.id)
        return {
            ...account,
            returned: borrow.returned
        }
    })
    .slice(0, 10)
    
    
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
