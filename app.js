const btn = document.querySelectorAll(".pick button");
const resultCont = document.querySelector(".result");
const pickCont = document.querySelector(".pick");

btn.forEach(function (e) {
  e.addEventListener("click", () => {
    const id = e.dataset.id;
    const yourPick = document.querySelector(".you");
    pickCont.classList.add("hide");
    resultCont.classList.add("show");

    yourPick.innerHTML = `<h2>YOU PICKED</h2>
    <button class="${id}-container cont">
    <div class="${id} img">
      <img src="/images/icon-${id}.svg" alt="" />
    </div>
  </button>`;
  });
});
