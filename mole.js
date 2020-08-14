// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs__mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs__mole-head--hidden');
//     }
//   }, 1000);

// });

let stopTimeout;

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");

  // if (moleHeads.length === 0) {
  //   alert("You won!");
  //   return;
  // }

  let randomNum = Math.floor(Math.random() * ((moleHeads.length - 1) - 0 + 1) + 0);

  let moleHead = moleHeads[randomNum];

  moleHead.classList.remove("wgs__mole-head--hidden");

  stopTimeout = setTimeout(() => hideMole(moleHead), 3000);


}

function hideMole(moleHead) {
  moleHead.classList.add("wgs__mole-head--hidden");

  setTimeout(popUpRandomMole, 1000);
}


window.addEventListener("DOMContentLoaded", (event) => {
  let canClick = true;
  setTimeout(popUpRandomMole, 0);
  let moleCount = document.querySelector(".header__mole-count");
  let count = 30;
  moleCount.innerHTML = count;

  let scoreCount = document.querySelector(".header__score-num");
  let score = 0;
  scoreCount.innerHTML = score;


  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  let headerStat = document.querySelector(".header__status-words");

  moleHeads.forEach((moleHead) => {
    moleHead.addEventListener("click", (event) => {
      if (!canClick) {
        return;
      }
      count--;
      moleCount.innerHTML = count;
      score++;
      scoreCount.innerHTML = score;
      if (count === 25) {
        canClick = false;
        headerStat.innerHTML = "GAME OVER";
        event.target.classList.add("wgs__mole-head--hidden");
        headerStat.classList.remove("header__status--hidden");
        clearTimeout(stopTimeout);
        //event.stopPropagation();
        //event.preventDefault();
        //window.location.reload();
        return;
      }
      clearTimeout(stopTimeout);
      hideMole(event.target);
      //moleHead.classList.add("wgs__mole-head--hidden");
      // moleHead.classList.add("wgs__mole-head--whacked");
    })
  })
})
