function findAccountById(accounts, id) {
   return accounts.find((account) => account.id === id)
    
    
    
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((a,b) => a.name.last > b.name.last ? 1: -1) ;
    
    
    
}

function getTotalNumberOfBorrows(account, books) {
    return books.reduce((acc, book) => book.borrows.filter(borrows => borrows.id === account.id).length + acc, 0) 
}

function getBooksPossessedByAccount(account, books, authors) {
    return books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false)
    
    .map(book => {
        return {
            ...book, 
            author: authors.find(author => author.id === book.authorId)
        }
    })
    
    
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
