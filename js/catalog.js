const catalogItem = document.querySelector("body");

catalogItem.addEventListener("click", (e) => {
  let elem = e.target.closest(".catalog-item");
  if (elem) {
    if (!e.target.classList.contains("favorites")) {
      console.log(
        elem.querySelector(".catalog-item-name").querySelector("span"),
      );
      window.location.href = "./card.html";
    }
  }
});
