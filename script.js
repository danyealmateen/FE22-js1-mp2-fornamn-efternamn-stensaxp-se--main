let playerInputName = document.getElementById("playerInputName");
let startGameBtn = document.getElementById("startGameBtn");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");
let nameOutput = document.getElementById("nameOutput");
let computerScoreOutput = document.getElementById("computerScoreOutput");
let computerWeaponOutput = document.getElementById("computerWeaponOutput");
let playerScoreOutput = document.getElementById("playerScoreOutput");
let playerWeaponOutput = document.getElementById("playerWeaponOutput");
let weaponsOfChoice = ["rock", "paper", "scissors"];
let playerWeapon = 0;
let playerScore = 0;
let computerScore = 0;
let randomNumberGenerator = Math.round(Math.random() * 2);
let computerWeapon = weaponsOfChoice[randomNumberGenerator];

startGameBtn.addEventListener("keypress", (event) => {
  event.preventDefault();
  nameOutput.innerText = playerInputName.value;
  computerScoreOutput.innerText = `Computer score: ${computerScore}`;
  playerScoreOutput.innerText = `Player score: ${playerScore}`;
});

startGameBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nameOutput.innerText = playerInputName.value;
  computerScoreOutput.innerText = `Computer score: ${computerScore}`;
  playerScoreOutput.innerText = `Player score: ${playerScore}`;
});

rockBtn.addEventListener("click", () => {
  playerWeapon = weaponsOfChoice[0];
  randomNumberGenerator = Math.round(Math.random() * 2);
  computerWeapon = weaponsOfChoice[randomNumberGenerator];
  playerWeaponOutput.innerText = "Player chose Rock";

  if (computerWeapon === "paper") {
    computerScore++;
    computerScoreOutput.innerText = `Computer score: ${computerScore}`;
    computerWeaponOutput.innerText = "Computer chose paper.";
  } else if (computerWeapon === "scissors") {
    playerScore++;
    playerScoreOutput.innerText = `Player score: ${playerScore}`;
    computerWeaponOutput.innerText = "Computer chose scissors.";
  } else {
    computerWeaponOutput.innerText = "Computer chose Rock.";
  }
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore === 3) {
    setTimeout(function () {
      alert("YOU WIN!");
      resetTheGame();
    }, 100);
  }

  if (computerScore === 3) {
    setTimeout(function () {
      alert("YOU LOSE!");
      resetTheGame();
    }, 100);
  }
});

scissorBtn.addEventListener("click", () => {
  playerWeapon = weaponsOfChoice[2];
  randomNumberGenerator = Math.round(Math.random() * 2);
  computerWeapon = weaponsOfChoice[randomNumberGenerator];
  playerWeaponOutput.innerText = "Player chose Scissor";
  if (computerWeapon === "rock") {
    computerScore++;
    computerScoreOutput.innerText = `Computer score: ${computerScore}`;
    computerWeaponOutput.innerText = "Computer chose Rock.";
  } else if (computerWeapon === "paper") {
    playerScore++;
    playerScoreOutput.innerText = `Player score: ${playerScore}`;
    computerWeaponOutput.innerText = "Computer chose scissors.";
  } else {
    computerWeaponOutput.innerText = "Computer chose Scissor.";
  }
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore === 3) {
    setTimeout(function () {
      alert("YOU WIN!");
      resetTheGame();
    }, 100);
  }

  if (computerScore === 3) {
    setTimeout(function () {
      alert("YOU LOSE!");
      resetTheGame();
    }, 100);
  }
});

paperBtn.addEventListener("click", () => {
  playerWeapon = weaponsOfChoice[1];
  randomNumberGenerator = Math.round(Math.random() * 2);
  computerWeapon = weaponsOfChoice[randomNumberGenerator];
  playerWeaponOutput.innerText = "Player chose Paper";
  if (computerWeapon === "scissors") {
    computerScore++;
    computerScoreOutput.innerText = `Computer score: ${computerScore}`;
    computerWeaponOutput.innerText = "Computer chose scissors.";
  } else if (computerWeapon === "rock") {
    playerScore++;
    playerScoreOutput.innerText = `Player score: ${playerScore}`;
    computerWeaponOutput.innerText = "Computer chose Rock.";
  } else {
    computerWeaponOutput.innerText = "Computer chose Paper!";
  }
  console.log(playerScore);
  console.log(computerScore);

  if (playerScore === 3) {
    setTimeout(function () {
      alert("YOU WIN!");
      resetTheGame();
    }, 100);
  }

  if (computerScore === 3) {
    setTimeout(function () {
      alert("YOU LOSE!");
      resetTheGame();
    }, 100);
  }
});

function resetTheGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreOutput.innerText = 0;
  playerScoreOutput.innerText = 0;
  computerWeaponOutput.innerText = "";
  playerWeaponOutput.innerText = "";
}
