function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
          .then(response => response.json())
          .then(books => renderBooks(books));
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `${book.name}: <em>${book.numberOfPages} pages</em>`;
    main.appendChild(h2);
  });
  const totalPages = document.createElement('h3');
  totalPages.innerHTML = `<em style='color: red'>Total Pages: ${books.map(book=>book.numberOfPages).reduce((a, c)=>a+c)}</em>`;
  main.appendChild(totalPages);

  const fifthBook = document.createElement('h3');
  fifthBook.innerHTML = `<em style='color: blue'>Fifth Book: ${books[4].name}</em>`;
  main.appendChild(fifthBook);

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
