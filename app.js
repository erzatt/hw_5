var numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67];
var addNumbers = numbers.filter(function(number) {
  return number % 2 !== 0;
});
console.log(addNumbers); 

function filterBooks(books) {
    var booksWithU = [];
    var otherBooks = [];
  
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      if (book.toLowerCase().indexOf('у') >= 0) {
        booksWithU.push(book);
      } else {
        otherBooks.push(book);
      }
    }
    return [booksWithU, otherBooks];
  }
  
  var books = ['Yummy YUCKY', 'Extra Yarn', 'Does a Yak Get a Haircut? ', 'Yardstick'];
  var filteredBooks = filterBooks(books);
  
  console.log(filteredBooks[0]);
  console.log(filteredBooks[1]);