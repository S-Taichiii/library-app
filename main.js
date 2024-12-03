function generateBookCard() {
  let bookCard = document.createElement("div");
  bookCard.classList.add("col-9", "p-2");

  let htmlString = `
    <div class="d-flex">
      <div class="col-5"></div>
      <div>
        <h3>THE HABITS OF HIGHLY EFFECTIVE PEOPLE</h3>
        <p>name</p>
        <p>price</p>
        <p>From the New York Times bestselling author of Bad Feminist: a searingly honest memoir of food, weight, self-image, and learning how to feed your hunger while taking care of yourself. “I ate and ate and ate in the hopes that if I made myself big, my body would be safe. I buried the girl I was because she ran into all kinds of trouble. I tried to erase every memory of her, but she is still there, somewhere. . . . I was trapped in my body, one that I barely recognized or understood, but at least I was safe.” In her phenomenally popular essays and long-running Tumblr blog, Roxane Gay has written </p>
      </div>
    </div> 
    <div>
      <div class="d-flex">
        <p>page</p>
        <p>320</p>
      </div>
      <div class="d-flex">
        <p>pulisher</p>
        <p>Simon & Schuster Audio</p>
      </div>
      <div class="d-flex">
        <p>Published Date</p>
        <p>12-07-2019</p>
      </div>
      <div class="d-flex">
        <p>Categories</p>
        <p>Biography & Autobiography</p>
      </div>
    </div>
  `;

  bookCard.innerHTML = htmlString;

  return bookCard;
}

let parent = document.getElementById("target");
parent.append(generateBookCard());
