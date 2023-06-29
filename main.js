// Variables

let start = document.getElementById("start");
let onGame = document.getElementById("onGame");
let mainGame = document.getElementById("gaming");

let score = document.getElementById("score");
let record = document.getElementById("record");
let counter = setInterval(timerIntervalFunction, 1000);

let planes = document.querySelectorAll(".plane");
let timeOver = document.getElementById("timeOver");

let timer = document.getElementById("timer");
let seconds = 45;

let actualScore = 0;
let recordScore = 0;

// Eventos

planes[0].addEventListener("click", (e) => {
  if (!planes[0].classList.contains("death")) {
    actualScore = actualScore + 1;
    score.value = `Score = ${actualScore}`;
    death(0, "plane1");
  }
  recordChange();
});

planes[1].addEventListener("click", (e) => {
  if (!planes[1].classList.contains("death")) {
    actualScore = actualScore + 2;
    score.value = `Score = ${actualScore}`;
    death(1, "plane2");
  }
  recordChange();
});

planes[2].addEventListener("click", (e) => {
  if (!planes[2].classList.contains("death")) {
    actualScore = actualScore + 3;
    score.value = `Score = ${actualScore}`;
    death(2, "plane3");
  }
  recordChange();
});

start.onclick = () => {
  onGame.classList.add("onGameBlock");
  mainGame.classList.add("gamingNone");
  timerChange();
};

back.onclick = () => {
  onGame.classList.remove("onGameBlock");
  mainGame.classList.remove("gamingNone");
  repeat()
};

reset.onclick = repeat;

// Funciones

function repeat() {
  actualScore = 0;
  timeOver.classList.remove("timeOverBlock");
  setTimeout(() => {
    timeOver.classList.remove("timeOverTransition");
  }, 500);
  planes[0].classList.remove("plane1");
  planes[1].classList.remove("plane2");
  planes[2].classList.remove("plane3");
  setTimeout(() => {
    planes[0].classList.add("plane1");
    planes[1].classList.add("plane2");
    planes[2].classList.add("plane3");
  }, 500);
  score.value = "Score = 0";
  if (seconds == 0) {
    seconds = 45;
    timerChange;
  } else {
    seconds = 45;
    timer.value = "45s";
  }
}

function timerIntervalFunction() {
  if (seconds > 0 && seconds < 46) {
    seconds--;
  } else {
    timeOver.classList.add("timeOverBlock");
    setTimeout(() => {
      timeOver.classList.add("timeOverTransition");
    }, 500);
    planes[0].classList.remove("plane1");
    planes[1].classList.remove("plane2");
    planes[2].classList.remove("plane3");
    clearInterval(counter);
    counter = setInterval(timerIntervalFunction, 1000);
  }
  timer.value = seconds + "s";
}

function timerChange() {
  seconds = 45;
  timer.value = "45s";
  counter;
}

function recordChange() {
  if (actualScore > recordScore) {
    recordScore = actualScore;
    record.value = `Record = ${recordScore}`;
  }
}

function death(planeSelected, planeClass) {
  planes[planeSelected].classList.add("death");
  setTimeout(() => {
    planes[planeSelected].classList.remove("death");
  }, 1000);
  animationReset(planeSelected, planeClass);
}

function animationReset(planeSelected, planeClass) {
  setTimeout(() => {
    planes[planeSelected].classList.remove(planeClass);
  }, 500);
  setTimeout(() => {
    planes[planeSelected].classList.add(planeClass);
  }, 1000);
}
