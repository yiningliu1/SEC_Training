const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
}

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if(askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
}

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.")
}

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
}

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
}

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "scissors" ||
    playerChoice === "paper"
  ) {
    return playerChoice;
  } else {
    return false;
  }
}

const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.")
}

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[computerChoice];
}

const determineWinner = (playerChoice, computerChoice) => {
  const winner = 
    playerChoice === computerChoice 
      ? "Tie game!"
      : playerChoice === "rock" && computerChoice === "paper" 
      ? `playerOne: ${playerChoice}\nComputer: ${computerChoice}\nComputer Wins!`
      : playerChoice === "paper" && computerChoice === "scissors" 
      ? `playerOne: ${playerChoice}\nComputer: ${computerChoice}\nComputer Wins!`
      : playerChoice === "scissors" && computerChoice === "rock" 
      ? `playerOne: ${playerChoice}\nComputer: ${computerChoice}\nComputer Wins!`
      : `playerOne: ${playerChoice}\nComputer: ${computerChoice}\nplayerOne Wins!`;
  
      return winner;
}

const displayResult = (result) => {
  alert(result);
}

const askToPlayAgain = () => {
  return confirm("Play Again?");
}

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
}

initGame()