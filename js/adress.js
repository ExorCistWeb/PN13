document.querySelectorAll(".adress__content_btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".adress__content_panel").style.display = "none";
    document
      .querySelector(".adress__content_change")
      .classList.remove("is-disabled");
  });
});
document.querySelector(".settings__btn").addEventListener("click", (e) => {
  document.querySelector(".adress__content_panel").style.display = "grid";
  document
    .querySelector(".adress__content_change")
    .classList.add("is-disabled");
});
