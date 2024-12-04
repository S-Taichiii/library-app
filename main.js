function generateBookCard(data) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("col-9", "p-2");

  let htmlString = `
    <div class="d-flex">
      <div class="col-5"></div>
      <div>
        <h3>${data.title}</h3>
        <p>${data.authors[0].name}</p>
        <p>${data.by_statement}</p>
      </div>
    </div> 
    <div>
      <div class="d-flex">
        <p>page</p>
        <p>${data.number_of_pages}</p>
      </div>
      <div class="d-flex">
        <p>pulisher</p>
        <p>${parseArrayToString(data.publishers)}</p>
      </div>
      <div class="d-flex">
        <p>Published Date</p>
        <p>${data.publish_date}</p>
      </div>
      <div class="d-flex">
        <p>Categories</p>
        <p>${parseArrayToString(data.subjects)}</p>
      </div>
    </div>
  `;

  bookCard.innerHTML = htmlString;

  return bookCard;
}

function parseArrayToString(data) {
  let parse = "";
  for (let i = 0; i < data.length - 1; i++) {
    parse += data[i].name + ", ";
  }

  return parse + data[data.length - 1].name;
}

const config = {
  url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=ISBN:",
  parentId: "target",
  searchBtnId: "isbn-search-btn",
  searchInputId: "isbn-search",
};

let searchBtn = document.getElementById(config.searchBtnId);

searchBtn.addEventListener("click", () => {
  let parent = document.getElementById(config.parentId);
  let isbn = document.getElementById(config.searchInputId).value;

  fetch(config.url + isbn)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let bookKey in data) {
        let currentBook = data[bookKey];

        parent.append(generateBookCard(currentBook));
      }
    });
});
