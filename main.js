function generateBookCard() {
  let bookCard = document.createElement("div");
  bookCard.classList.add("col-7", "p-2");

  let htmlString = `
    <h3>result</h3>
    <div class="border p-4">
      <div class="d-flex">
        <div class="col-5 p-2"></div>
        <div>
          <h3 class='px-1 pt-1'>THE HABITS OF HIGHLY EFFECTIVE PEOPLE</h3>
          <p class='px-1'>name</p>
          <p class="px-1">price</p>
          <p class="px-1">From the New York Times bestselling author of Bad Feminist: a searingly honest memoir of food, weight, self-image, and learning how to feed your hunger while taking care of yourself. “I ate and ate and ate in the hopes that if I made myself big, my body would be safe. I buried the girl I was because she ran into all kinds of trouble. I tried to erase every memory of her, but she is still there, somewhere. . . . I was trapped in my body, one that I barely recognized or understood, but at least I was safe.” In her phenomenally popular essays and long-running Tumblr blog, Roxane Gay has written </p>
        </div>
      </div> 
      <div class="col-9">
        <table width="100%" cellpadding="10%">
          <tr bgcolor="#dcdcdc">
            <td><b>page</b></td>
            <td>320</td>
          </tr>
          <tr class="border-top" bg-color="#f5f5f5">
            <td><b>pulisher</b></td>
            <td>Simon & Schuster Audio</td>
          </tr>
          <tr bgcolor="#dcdcdc">
            <td><b>Published Date</b></td>
            <td>12-07-2019</td>
          </tr>
          <tr bg-color="#f5f5f5">
            <td><b>Categories</b></td>
            <td>Biography & Autobiography</td>
          </tr>
        </table>
      </div>
    </div>
  `;

  bookCard.innerHTML = htmlString;

  return bookCard;
}

let parent = document.getElementById("target");
parent.append(generateBookCard());
