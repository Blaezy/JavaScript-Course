console.log("hellooooo");

console.log("local" + localStorage.getItem("scoreCount"));

let savedScore = JSON.parse(localStorage.getItem("scoreCount"));

// scoreCount.Wins = savedScore.Wins;
// scoreCount.Losses = savedScore.Losses;
// scoreCount.Tie = savedScore.Tie;

let scoreCount = savedScore || {
  Wins: 0,
  Losses: 0,
  Tie: 0,
};

console.log(scoreCount);

function scoreDisplay() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `Your Score: Wins: ${scoreCount.Wins} , Losses: ${scoreCount.Losses} , Tie: ${scoreCount.Tie}`;
}
scoreDisplay();

// auto play the game

let isAutoPlay = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlay) {
    intervalID = setInterval(function () {
      const playerMove = randomMoves();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
    const  autoButtonElement = document.querySelector(".auto-play-button");
    autoButtonElement.classList.add("auto-play-button-active");
  }
  else{
    clearInterval(intervalID);
    isAutoPlay = false;
    const  autoButtonElement = document.querySelector(".auto-play-button");
    autoButtonElement.classList.remove("auto-play-button-active");
  }
}

function randomMoves() {
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) return "Rock";
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) return "Paper";
  else if (randomNumber > 2 / 3 && randomNumber < 1) return "Scissors";
}

function playGame(userChoice) {
  const computerChoice = randomMoves();
  let result = "";

  if (userChoice === computerChoice) {
    result = "Tie";
    scoreCount.Tie += 1;
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win";
    scoreCount.Wins += 1;
  } else {
    result = "You lose";
    scoreCount.Losses += 1;
  }

  console.log(scoreCount);
  localStorage.setItem("scoreCount", JSON.stringify(scoreCount));

  showResult(result, userChoice, computerChoice);
  showMoves(result, userChoice, computerChoice);
  scoreDisplay();

  // alert(
  //   `You picked ${userChoice}. Computer picked ${computerChoice}. ${result}. \nYour Score: Wins: ${scoreCount.Wins} , Losses: ${scoreCount.Losses} , Tie: ${scoreCount.Tie} `
  // );
}

function resetScore() {
  scoreCount.Wins = 0;
  scoreCount.Losses = 0;
  scoreCount.Tie = 0;

  // localStorage.setItem("scoreCount", JSON.stringify(scoreCount));
  localStorage.removeItem("scoreCount");
  scoreDisplay();
}
function getMoveImage(move) {
  if (move === "Rock") return "../../../images/rock-emoji.png";
  if (move === "Paper") return "../../../images/paper-emoji.png";
  if (move === "Scissors") return "../../../images/scissors-emoji.png";
}

function showResult(result, userChoice, computerChoice) {
  document.querySelector(".js-result").innerHTML = `${result}.`;
}
function showMoves(result, userChoice, computerChoice) {
  const userChoiceImage = getMoveImage(userChoice);
  const computerChoiceImage = getMoveImage(computerChoice);

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked <img class="moves-image" src="${userChoiceImage}" title="${userChoice}"> Computer picked <img class="moves-image" src="${computerChoiceImage}" title="${computerChoice}">`;
}
