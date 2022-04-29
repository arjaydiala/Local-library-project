function getTotalBooksCount(books) {
    return books.length;
    
    
}

function getTotalAccountsCount(accounts) {
    return accounts.length;
    
    
}

function getBooksBorrowedCount(books) {
   const borrowed = books.filter((book) => book.borrows[0].returned == false)
    return borrowed.length;
    
    
}

function getMostCommonGenres(books) {
    const data = books.reduce((result, book) => {
        if(!result[book.genre]) {
            result[book.genre] = 0 
        }
        result[book.genre] ++
        return result;
    },}{)
    const genres = []
    for(genre in data) {
        genres.push({
          name: genre,
            count: data[genre]
        })
            
        
    }
 
   return genres.sort((a,b) => b.count - a.count) .slice(0, 5)
}

function getMostPopularBooks(books) {
   return books.map((book) => {
        return {
            name: book.title,
            count: book.borrows.length 
        }
    })
.sort((a,b) => b.count - a.count) .slice(0, 5)
    
}

function getMostPopularAuthors(books, authors) {
    return authors.map((author) => {
 return{
    name: author.name.first + ' ' + author.name.last,
     count: books.filter((book) => book.authorId == author.id)
     
     .reduce((result, book) => book.borrows.length + result, 0)
}
    })
    .sort((a,b) => b.count - a.count) .slice(0, 5)
    
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
