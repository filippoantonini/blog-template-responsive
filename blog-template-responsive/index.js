import { blogArticles } from "./data.js";

let section = document.getElementById("section");

function getArticles() {
  let html = "";

  blogArticles.forEach(item => {
    html += `
    <article class="articles">
        <img class="image-art" src=${item.image}>
                <p class="main-article-text">${item.date}</p>
                <h1 class="main-article-text">${item.name}</h1>
                <p class="main-article-text">${item.text}</p>
    </article>
    `;
  });

  return html;
}

function render() {
  section.innerHTML = getArticles();
}

render();
  