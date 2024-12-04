function generateBookCard(data) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("col-7", "p-2");

  let htmlString = `
    <h3>result</h3>
    <div class="border p-4">
      <div class="d-flex">
        <div class="col-5 p-2">
          <img alt="No Picture" src="${data.cover.medium}">
        </div>
        <div>
          <h3 class='px-1 pt-1'>${data.title}</h3>
          <p class='px-1'>${data.authors[0].name}</p>
          <p class="px-1">${data.by_statement}</p>
        </div>
      </div> 
      <div class="col-9">
        <table width="100%" cellpadding="10%">
          <tr bgcolor="#dcdcdc">
            <td><b>page</b></td>
            <td>${data.number_of_pages}</td>
          </tr>
          <tr class="border-top" bg-color="#f5f5f5">
            <td><b>pulisher</b></td>
            <td>${parseArrayToString(data.publishers)}</td>
          </tr>
          <tr bgcolor="#dcdcdc">
            <td><b>Published Date</b></td>
            <td>${data.publish_date}</td>
          </tr>
          <tr bg-color="#f5f5f5">
            <td><b>Categories</b></td>
            <td>${parseArrayToString(data.subjects)}</td>
          </tr>
        </table>
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
