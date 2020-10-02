const btn = document.querySelectorAll(".pick button");
const resultCont = document.querySelector(".result");
const pickCont = document.querySelector(".pick");
const houseCont = document.querySelector(".house");
const yourPick = document.querySelector(".you");
const resultsText = document.querySelector(".results");

const scoreText = document.querySelector(".score");
let score = 0;

btn.forEach(function (e) {
  e.addEventListener("click", () => {
    const userPicked = e.dataset.id;
    pickCont.classList.add("hide");
    resultCont.classList.add("show");
    resultCont.classList.remove("hide");
    resultCont.classList.remove("display-none");

    yourPick.innerHTML = `<h2>YOU PICKED</h2>
    <button class="${userPicked}-container cont animation">
    <div class="${userPicked} img">
      <img src="/images/icon-${userPicked}.svg" alt="" />
    </div>
    </button>`;

    const compPicks = ["rock", "paper", "scissors"];

    let i = Math.floor(Math.random() * compPicks.length);
    const compPicked = compPicks[i];

    const housePick = document.querySelector(".house button");
    housePick.classList.add("animation");

    setTimeout(function compPick() {
      houseCont.innerHTML = `<h2>THE HOUSE PICKED</h2>
      <button class="${compPicked}-container cont">
        <div class="${compPicked} img">
          <img src="/images/icon-${compPicked}.svg" alt="" />
        </div>
        </button>`;
      resultCont.classList.add("final");
      scoreText.innerHTML = score;
      gameResult();
    }, 1200);

    // results
    function results() {
      if (userPicked === compPicked) {
        resultsText.innerHTML = "DRAW";
      } else if (compPicked === "rock" && userPicked === "paper") {
        resultsText.innerHTML = "WIN";
        score++;
      } else if (compPicked === "rock" && userPicked === "scissors") {
        resultsText.innerHTML = "LOSE";
        score--;
      } else if (compPicked === "paper" && userPicked === "rock") {
        resultsText.innerHTML = "LOSE";
        score--;
      } else if (compPicked === "paper" && userPicked === "scissors") {
        resultsText.innerHTML = "WIN";
        score++;
      } else if (compPicked === "scissors" && userPicked === "rock") {
        resultsText.innerHTML = "WIN";
        score++;
      } else if (compPicked === "scissors" && userPicked === "paper") {
        resultsText.innerHTML = "LOSE";
        score--;
      }
    }
    results();
    // go back
    const playAgain = document.querySelector(".again");
    const img = document.querySelector(".img-house");

    playAgain.addEventListener("click", function () {
      // show pick container
      pickCont.classList.remove("hide");
      // remove classes for results cont
      resultCont.classList.remove("show");
      resultCont.classList.remove("final");
      resultCont.classList.add("display-none");
      houseCont.innerHTML = `<h2>THE HOUSE PICKED</h2>
      <button class="scissors-container cont none">
        <div class="house img img-house">
          <img src="/images/icon-scissors.svg" alt="" />
        </div>
      </button>`;
    });
    // win/lose animations

    function gameResult() {
      animationDiv = document.createElement("div");
      animationDiv.classList.add("win-animation");
      animationDiv.innerHTML = `<div class="circle-15"></div>
      <div class="circle-2"></div>
      <div class="circle-25"></div>`;

      if (resultsText.innerHTML === "WIN") {
        yourPick.appendChild(animationDiv);
      } else if (resultsText.innerHTML === "LOSE") {
        houseCont.appendChild(animationDiv);
      }
    }
  });
});
