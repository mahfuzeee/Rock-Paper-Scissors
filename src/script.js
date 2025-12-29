//UI interface elements variables
const container = document.querySelector(".container");
const buttonDiv = document.createElement("div");
const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const startBtn = document.createElement("button");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const playAgainBtn = document.createElement("button");
const gameOverBtn = document.createElement("button");


//Div classes
buttonDiv.classList.add("buttons");
resultDiv.classList.add("results");
scoreDiv.classList.add("scores");
rockBtn.classList.add("btn");
paperBtn.classList.add("btn");
scissorBtn.classList.add("btn");
startBtn.classList.add("btn");
playAgainBtn.classList.add("btn");
gameOverBtn.classList.add("btn");
startBtn.classList.add("start-btn");
playAgainBtn.classList.add("large-btn");
gameOverBtn.classList.add("large-btn");


//Assining Button text
buttonDiv.style.justifyContent = "center";
startBtn.innerText = "Start";
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorBtn.innerText = "Scissors";
playAgainBtn.innerText = "Play Again";
gameOverBtn.innerText = "Game Over";


//Appending Elements
container.appendChild(buttonDiv);
container.appendChild(resultDiv);
container.appendChild(resultDiv);


let isStarted = false;
if(!isStarted) {
    buttonDiv.appendChild(startBtn);

}


let humanScore = 0;
let computerScore = 0;
let counter = 1;

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



function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log('It is a Tie!, Play agian');
        resultDiv.innerText = "It is a Tie!, Play agian";
        scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                            Computer Score: <span>${computerScore}</span>.`;
    } else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log('Rock crushes scissors.')
        console.log('Human Win!');
        humanScore++;
        resultDiv.innerText = "Human Win!, Rock crushes scissors.";
        scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                            Computer Score: <span>${computerScore}</span>.`
    } else if(humanChoice === "Paper" && computerChoice === "Rock") {
        console.log('Paper covers rock.');
        console.log('Human Win!');
        humanScore++;
        resultDiv.innerText = "Human Win!, Paper covers rock.";
        scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                            Computer Score: <span>${computerScore}</span>.`
    } else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log('Scissor cuts paper.');
        console.log('Human Win!');
        humanScore++;
        resultDiv.innerText = "Human Win!, Scissor cuts paper.";
        scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                            Computer Score: <span>${computerScore}</span>.`
    } else {
        console.log('Computer Win!');
        computerScore++;
        resultDiv.innerText = "Computer Win!";
        scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                            Computer Score: <span>${computerScore}</span>.`
    }

    if(counter >= 7) {
        let resutlText = '';
        buttonDiv.removeChild(rockBtn);
        buttonDiv.removeChild(paperBtn);
        buttonDiv.removeChild(scissorBtn);
        buttonDiv.appendChild(playAgainBtn);
        buttonDiv.appendChild(gameOverBtn);
        if(humanScore === computerScore) {
            resutlText = `It's a tie. Play again.`;
        } else if(humanScore > computerScore){
            console.log('Human wins the Game.');
            resutlText = 'Human wins the Game.';
        } else {
            console.log('Computer wins the Game.');
            resutlText = 'Computer wins the Game.';
        }
        resultDiv.innerText = `Total ${counter} round played. ` + resutlText;
    }

}


//Start UI interface

startBtn.addEventListener("click", () => {
    isStarted = true;
    if(isStarted) {
        buttonDiv.removeChild(startBtn);
        buttonDiv.appendChild(rockBtn);
        buttonDiv.appendChild(paperBtn);
        buttonDiv.appendChild(scissorBtn);
        container.appendChild(resultDiv);
        container.appendChild(scoreDiv);
    }
});

rockBtn.addEventListener("click", () => {
    const humanSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    counter++;
});

paperBtn.addEventListener("click", () => {
    const humanSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    counter++;
});

scissorBtn.addEventListener("click", () => {
    const humanSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    counter++;
});



playAgainBtn.addEventListener('click', () => {
    buttonDiv.removeChild(gameOverBtn);
    buttonDiv.removeChild(playAgainBtn);
    buttonDiv.appendChild(rockBtn);
    buttonDiv.appendChild(paperBtn);
    buttonDiv.appendChild(scissorBtn);
    resultDiv.innerText = "";
    counter = 0;
    humanScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = `Human Score: <span>${humanScore}</span>,
                        Computer Score: <span>${computerScore}</span>.`;


});

gameOverBtn.addEventListener('click', () => {
    buttonDiv.removeChild(gameOverBtn);
    buttonDiv.removeChild(playAgainBtn);
    resultDiv.innerText = "Game Over!";
    scoreDiv.innerHTML = "";
})