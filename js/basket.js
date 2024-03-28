document.querySelector(".order__btn").addEventListener("click", () => {
  document.querySelector(".order__block").classList.add("is-submit");
  document.querySelector(".order__btn").style.display = "none";
});
document.querySelector(".btn-basket").addEventListener("click", () => {
  const body = document.querySelector("body");
  let height = window.getComputedStyle(body).height;
  document.querySelector(".overlay").style.height = height;
  document.querySelector(".modal").classList.add("is-visible");
  document.querySelector(".overlay").classList.add("is-visible");
});

function modalClose(close) {
  document.querySelector(close).addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("is-visible");
    document.querySelector(".overlay").classList.remove("is-visible");
  });
}

modalClose(".btn-close");
modalClose(".overlay");
