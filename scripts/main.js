import sidebar from "/components/sidebar.js";
let navbar = document.getElementById("sidebar");
navbar.innerHTML = sidebar();

let url = `https://shrouded-earth-23381.herokuapp.com/api/headlines/india`;

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keypress", (e) => {
  let value = searchbar.value;
  if (e.code === "Enter" && value === "cricket") {
    localStorage.setItem("searchterm", value);
    window.location.href = "search.html";
  }
  console.log(e);
});

let x = await apiCall(url);
let main = document.getElementById("main");
appendArticles(x, main);
// -------get data from the api --------------
async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);
    let articles = await res.json();
    //    console.log(data);
    return articles;
  } catch (e) {
    console.log("error:", e);
  }
}
// -----------appned articles to the homepage----------
function appendArticles(articles, main) {
  //add append logic here
  articles.forEach((el) => {
    let card = makeCard(el);
    card.addEventListener("click", () => {
      localStorage.setItem("article", JSON.stringify(el));
      console.log("clicked on news");
      window.location.href = "news.html";
    });
    main.append(card);

    console.log(el.urlToImage);
  });
}

///---------------make news card--------------------------------
function makeCard(el) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  //  p.textContent = el.description;
  let img = document.createElement("img");
  img.src = el.urlToImage;
  let title = document.createElement("h3");
  title.setAttribute("id", "title");
  title.innerHTML = el.title;

  div.append(img, title);
  return div;
}
export { apiCall, appendArticles };
