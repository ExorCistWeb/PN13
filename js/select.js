let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  let selectIcon = document.querySelector(".select__icon");
  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
    selectIcon.classList.remove("is-up");
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
    selectIcon.classList.add("is-up");
  }

  function selectChoose() {
    let text = this.querySelector(".select__item-span").innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerHTML = `<span> ${text} </span>`;

    select.classList.remove("is-active");
    selectIcon.classList.remove("is-up");
  }
};

select();
