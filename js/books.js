// connect api
const searchBooks = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  //   clear input field
  searchInput.value = "";

  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchBooks(data.docs));
};

// showing display results
const displaySearchBooks = (books) => {
  // console.log(books);
  const booksCard = document.getElementById("books-card");
  booksCard.textContent = "";
  if (books.length === 0) {
    const h3 = document.createElement("h3");
    h3.innerText = "No Results Found!";
    booksCard.appendChild(h3);
  } else {
    books.forEach((book) => {
      console.log(book);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
        <div class="card">
          <img src='https://covers.openlibrary.org/b/id/${
            book.cover_i
          }-M.jpg' class="card-img-top" alt="..." />
            <div class="card-body">
                <h4 class="card-title">${book.title}</h4>
                <h5>Author: ${book.author_name.slice(0, 25)}</h5>
                <h6>First Publish Date: ${book.first_publish_year}</h6>
           </div>
         </div>
      `;
      booksCard.appendChild(div);
    });
  }
};
