function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  let answerPlayerSelection = prompt("Enter rock, scissors or paper");
  playerSelection = playerSelection.toLowerCase();

  const options = {
    rock: { win: "scissors", lose: "paper" },
    paper: { win: "rock", lose: "scissors" },
    scissors: { win: "paper", lose: "rock" },
  };

  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (options[playerSelection].win === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const computerSelection = computerPlay();
console.log(computerPlay());
console.log(answerPlayerSelection);
console.log(playRound(answerPlayerSelection, computerSelection));
