let computerChoice = '';
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;
let counterTie = 0;

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener("click", () => {
    humanChoice = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection)
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener("click", () => {
    humanChoice = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection)
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener("click", () => {
    humanChoice = 'Scissors';
    let computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection)
});

const scorecard = document.querySelector(".scorecard");

function getComputerChoice() {
    // generate random number 0, 1, or 2
    let randomNumber = Math.floor(Math.random() * 3);

    // assign rock,paper,scissors to 0,1,2 and set choice
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    //display computer choice
    console.log("Computer chooses: " + computerChoice)

    // return string
    return computerChoice;
}

function humanWinsRound() {
    humanScore += 1;
    const roundWinner = document.createElement("div");
    roundWinner.classList.add("content");
    roundWinner.textContent = `Human: ${humanScore} --- Computer: ${computerScore}`;
    scorecard.appendChild(roundWinner);
    if (humanScore === 5) {
        roundWinner.textContent = "****  Human wins!  ****";
    };
    scorecard.appendChild(roundWinner);
}

function computerWinsRound() {
    computerScore += 1;
    const roundWinner = document.createElement("div");
    roundWinner.classList.add("content");
    roundWinner.textContent = `Human: ${humanScore} --- Computer: ${computerScore}`;
    scorecard.appendChild(roundWinner);
    if (computerScore === 5) {
        roundWinner.textContent = "****  Computer wins!  ****";
    };
    scorecard.appendChild(roundWinner);
}

function tiedRound() {
    counterTie += 1;
    const roundTied = document.createElement("div");
    roundTied.classList.add("content");
    roundTied.textContent = "  ---  TIE ROUND  ---   ";
    scorecard.appendChild(roundTied);
}

// create function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            humanWinsRound();
        } else if (computerChoice === 'Paper') {
            computerWinsRound();
        } else {
            tiedRound();
        }
    }
    if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            humanWinsRound();
        } else if (computerChoice === 'Scissors') {
            computerWinsRound();
        } else {
            tiedRound();
        }
    }
    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            humanWinsRound();
        } else if (computerChoice === 'Rock') {
            computerWinsRound();
        } else {
            tiedRound();
        }
    }
}

