const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");
const iconEl = document.querySelector(".mic-icon")

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});
iconEl.addEventListener("click",()=> {
    searchBarContainerEl.classList.toggle("active");
});