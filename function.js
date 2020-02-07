// because the burger is closed we're setting it to false as to whether it has
// dropped down or not
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
