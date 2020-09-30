const btn = document.querySelectorAll(".pick button");
const resultCont = document.querySelector(".result");
const pickCont = document.querySelector(".pick");

btn.forEach(function (e) {
  e.addEventListener("click", () => {
    const id = e.dataset.id;
    const yourPick = document.querySelector(".you");
    pickCont.classList.add("hide");
    resultCont.classList.add("show");
    resultCont.classList.remove("hide");

    yourPick.innerHTML = `<h2>YOU PICKED</h2>
    <button class="${id}-container cont animation">
    <div class="${id} img">
      <img src="/images/icon-${id}.svg" alt="" />
    </div>
    </button>`;

    const housePicks = ["rock", "paper", "scissors"];

    let i = Math.floor(Math.random() * housePicks.length);
    const housePicked = housePicks[i];

    const housePick = document.querySelector(".house button");
    housePick.classList.add("animation");

    setTimeout(function housePick() {
      const houseCont = document.querySelector(".house");

      houseCont.innerHTML = `<h2>THE HOUSE PICKED</h2>
      <button class="${housePicked}-container cont">
        <div class="${housePicked} img">
          <img src="/images/icon-${housePicked}.svg" alt="" />
        </div>
      </button>`;
      resultCont.classList.add("final");
    }, 1200);
    function results() {
      const resultsText = document.querySelector(".results");
      if (id == housePicked) {
        resultsText.innerHTML = "DRAW";
      }
    }
    results();
  });
});
