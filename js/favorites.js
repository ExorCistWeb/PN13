const like = document.querySelector("body");

like.addEventListener("click", (e) => {
  if (e.target.classList.contains("favorites")) {
    let elem = e.target.closest(".catalog-item-name");
    let item = elem.querySelectorAll(".favorites");
    item.forEach((element) => {
      element.classList.toggle("favorites-active");
    });
  }
});
