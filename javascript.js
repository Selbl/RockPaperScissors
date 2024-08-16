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
    const roundResultElem = document.querySelector("#roundResult");
    var computerChoice = getComputerChoice();
    var humanChoice = getHumanChoice();
    // Check cases
    if (humanChoice === computerChoice) {
        roundResultElem.textContent = 'Tie!';
    }
    else if (match[humanChoice] === computerChoice){
        roundResultElem.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        //console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        roundResultElem.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        //console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    // Write score
    const humanScoreElem = document.querySelector("#humanScore");
    const computerScoreElem = document.querySelector("#computerScore");

    humanScoreElem.textContent = `Current Human Score: ${humanScore}`;
    computerScoreElem.textContent = `Current Computer Score: ${computerScore}`;
    //console.log(`Current score, You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame(){
    // Play rounds
    /*
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    */
    playRound();
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

// track number of rounds
var rounds = 0;
const button = document.querySelector("#btnPlayRound");
button.addEventListener("click", () => {
    if (rounds < 5){
        playRound();
        rounds++;
    }
    // Check final score
    if (rounds == 5){
        const finalResultElem = document.querySelector("#finalResult");
        // Check score
        if (humanScore > computerScore) {
            finalResultElem.textContent = `You win! Restart the browser to play again.`;
        }
        else if (humanScore < computerScore) {
            finalResultElem.textContent = `You lose! Restart the browser to play again.`;
        }
        else{
            finalResultElem.textContent = `Tie! Restart the browser to play again.`;;
        }
    }
})

//If number of rounds are equal to 5, stop the game!

// playGame();