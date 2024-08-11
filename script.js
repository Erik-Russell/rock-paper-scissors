// choose computers choice

// create string for choice
let computerChoice = '';

// declare func
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

// take human choice

// create string for choice
let humanChoice = '';

// declare function to take human input for choice
function getHumanChoice() {
    // prompt human for answer
    humanChoice = prompt("Enter your choice: ", "Rock, Paper, or Scissors");
    // test output
    console.log("Human chooses: " + humanChoice);
    // return string
    return humanChoice;
}

// declare player score variables
let humanScore = 0;
let computerScore = 0;

// create function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            console.log("human wins")
            humanScore = humanScore + 1;
        } else if (computerChoice === 'Paper') {
            console.log("computer wins")
            computerScore = computerScore + 1;
        } else {
            console.log("it is a tie");
        }
    }
    if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            console.log("human wins")
            humanScore = humanScore + 1;
        } else if (computerChoice === 'Scissors') {
            console.log("computer wins")
            computerScore = computerScore + 1;
        } else {
            console.log("it is a tie");
        }
    }
    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            console.log("human wins")
            humanScore = humanScore + 1;
        } else if (computerChoice === 'Rock') {
            console.log("computer wins")
            computerScore = computerScore + 1;
        } else {
            console.log("it is a tie");
        }
    }
}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Human:Computer")
console.log(humanScore + ":" + computerScore)
