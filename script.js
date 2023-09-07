const accesskey = "kvhV_BiR8IczQcMkuXnwUL91dqRYSr6wGb0vUqUTkig";

const input = document.querySelector(".search-box input");

const showbtn = document.querySelector(".show-btn");

const images = document.querySelector(".images");

let inputData = "";
let page = 1;
let perpage = 9;

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    page = 1;
    searchImages();
  }
  
});

showbtn.addEventListener("click", (e) => {
  page++;
  searchImages();
});

async function searchImages() {
  inputs = input.value;
  inputstring = inputs.toString();
  inputData = inputstring.toLowerCase();
  
  images.innerHTML = ''
 
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&per_page=${perpage}&client_id=${accesskey}`

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log(results);

  results.map((results) => {
    const image = document.createElement("img");
      image.src = results.urls.small;
    const imageLinks = document.createElement("a");
    imageLinks.href = results.links.html;
    imageLinks.target = "_blank"

    images.appendChild(image);
    image.appendChild(imageLinks);


  });

  page++;
  if (page > 1) {
    showbtn.style.display = "block";
  }
}
