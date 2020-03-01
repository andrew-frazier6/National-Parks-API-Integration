// let parkCodes = ["yose", "acad", "grte", "brca", "gaar", "yell"];

let description = document.querySelector(".description");
let link = document.querySelector(".link");
let title = document.querySelector(".title");

function render(parkCode, selector, link, title) {
  let url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&fields=description&api_key=bRrLhFfbvZMWxHlCWDqPt45vwoNgz950IaYNYkmC`;

  fetch(url)
    .then(res => res.json())
    .then(res => {
      selector.innerHTML = res.data[0].description;
      link.href = res.data[0].url;
      link.style.visibility = "visible";
      title.innerHTML = res.data[0].fullName;
    });
}

const yosemite = () => render("yose", description, link, title);
const acadia = () => render("acad", description, link, title);
const teton = () => render("grte", description, link, title);
const canyon = () => render("brca", description, link, title);
const artic = () => render("gaar", description, link, title);
const yellowstone = () => render("yell", description, link, title);

let toggleStatus = false;

let toggleHamburger = function() {
  let getHamburger = document.querySelector(".hamburger-dropdown");
  let getCategories = document.querySelector(".hamburger-dropdown ul");
  let getCategoriesTitle = document.querySelector(".hamburger-dropdown span");
  let getCategoriesLinks = document.querySelectorAll(
    ".hamburger-dropdown ul li a"
  );

  if (toggleStatus === false) {
    getCategories.style.visibility = "visible";
    getHamburger.style.width = "200px";
    getCategoriesTitle.style.opacity = "1";
    for (let i = 0; i < getCategoriesLinks.length; i++) {
      getCategoriesLinks[i].style.opacity = "1";
    }
    toggleStatus = true;
  } else if (toggleStatus === true) {
    getCategories.style.visibility = "hidden";
    getHamburger.style.width = "50px";
    getCategoriesTitle.style.opacity = "0";
    for (let i = 0; i < getCategoriesLinks.length; i++) {
      getCategoriesLinks[i].style.opacity = "0";
    }
    toggleStatus = false;
  }
};
