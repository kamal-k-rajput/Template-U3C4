
// -------get data from the api --------------
async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);
    let articles = await res.json();
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

      window.location.href = "news.html";
    });
    main.append(card);

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
