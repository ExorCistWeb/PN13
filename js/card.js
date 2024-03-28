document.querySelectorAll(".card__slider-desktop-img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".pop-up").style.display = "flex";
    document.querySelector(".pop-up img").src = img.getAttribute("src");
  };
});
document.querySelector(".pop-up span").addEventListener("click", () => {
  document.querySelector(".pop-up").style.display = "none";
});

document
  .querySelector(".card__info-table-size")
  .addEventListener("click", () => {
    document
      .querySelector(".card__info-table-size svg")
      .classList.toggle("table-active");
    document.querySelector(".table").classList.toggle("is-table-active");
  });
