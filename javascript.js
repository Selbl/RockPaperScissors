const items = ["rock","paper","scissors"];

// Set score
var humanScore = 0;
var computerScore = 0;

// Set a hash table where key is choice and value is what it beats
let match = {
    "paper": "rock",
    "rock": "scissors",
    "scissors": "paper"
}

function getComputerChoice() {
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function getHumanChoice() {
    var inp = prompt("Choose rock, paper or scissors! ");
    while (!(items.includes(inp.toLowerCase()))) {
        var inp = prompt("Choose rock, paper or scissors! ");
      }    
    return inp.toLowerCase();
    
}

function playRound(){
    var computerChoice = getComputerChoice();
    var humanChoice = getHumanChoice();
    // Check cases
    if (humanChoice === computerChoice) {
        console.log('Tie!');
    }
    else if (match[humanChoice] === computerChoice){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Current score, You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame(){
    // Play rounds
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    // Check score
    if (humanScore > computerScore) {
        console.log('You win!');
    }
    else if (humanScore < computerScore) {
        console.log('You lose!');
    }
    else{
        console.log('Tie!');
    }
}

playGame();