alert('This Rock, Paper, Scissor Game will prompt you to input 5 times.');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let option = parseInt(Math.floor(Math.random() * 3) + 1);
    // console.log(option);
    if(option === 1) {
        return "Rock";
    } else if(option === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Please Select (1)Rock, (2)Paper, (3)Scissors.");
    if(input === 1) {
        return "Rock";
    } else if(input === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log('It is a Tie!, Play agian');
    } else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log('Rock crushes scissors.')
        console.log('Human Win!');
        humanScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Rock") {
        console.log('Paper covers rock.');
        console.log('Human Win!');
        humanScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log('Scissor cuts paper.');
        console.log('Human Win!');
        humanScore++;
    } else {
        console.log('Computer Win!');
        computerScore++;
    }
}


function playGame() {
    let counter = 1;
    while(counter <= 5) {
        const humanSelection = getHumanChoice();
        //console.log(humanSelection);
        const computerSelection = getComputerChoice();
        console.log(`Human seleted: ${humanSelection}, and computer selected: ${computerSelection}`);

        playRound(humanSelection, computerSelection);
        console.log(`Human score: ${humanScore}, and computer score: ${computerScore}.`)
        counter++;
    }
    console.log('Game Over!');
    console.log(`Humnam wins ${humanScore} times. Computer wins ${computerScore} times.`);
    if(humanScore > computerScore){
        console.log('Human wins the Game.');
    } else {
        console.log('Computer wins the Game.');
    }
}

playGame();
