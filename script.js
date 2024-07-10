let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // computer random choice from above 3 options
  return options[randIdx];
};

// function for draw game prompt
const drawGame = (userChoice, compChoice) => {
  msg.innerHTML = `Game was Draw. You both chose <strong>${userChoice}</strong>. Play again.`;
  msg.style.backgroundColor = "#0000";
};

// function to update winner and loser
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You win!your <strong>${userChoice}</strong> beats <strong>${compChoice}</strong><br> You choose: <strong>${userChoice}</strong><br> Computer chooses: <strong>${compChoice}</strong>`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You lose!<strong>${compChoice}</strong> beats your <strong>${userChoice}</strong><br> You choose: <strong>${userChoice}</strong><br> Computer chooses: <strong>${compChoice}</strong>`;

    msg.style.backgroundColor = "red";
  }
};

// function of main game logic 
const playGame = (userChoice) => {
  // computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) { // if both user and computer choose the same choice
    // Draw Game
    drawGame(userChoice, compChoice);
  } else { // checking winner condition
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
