/* Here we are defining lengthy elements into easier to use constants */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Computer choice function */
function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
getComputerChoice()

/* Function to convert choice constants to readable words */
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

/* User wins function */
function win(userChose, computerChose) {
    const userChose_div = document.getElementById(userChose)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `Your ${convertToWord(userChose)} defeats the opposing ${convertToWord(computerChose)}. You win this round!`;
    userChose_div.classList.add('green-glow')
    setTimeout(() => userChose_div.classList.remove('green-glow'), 500);
    console.log("user score is " + userScore);
}

/* User loses function */
function lose(userChose, computerChose) {
    const userChose_div = document.getElementById(userChose)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChose)} is defeated by the opposing ${convertToWord(computerChose)}. You lose this round.`;
    userChose_div.classList.add('red-glow')
    setTimeout(() => userChose_div.classList.remove('red-glow'), 500);
    console.log("computer score is " + computerScore);
}

/* Draw game function */
function draw(userChose, computerChose) {
    const userChose_div = document.getElementById(userChose)
    result_p.innerHTML = `Your ${convertToWord(userChose)} matches the opposing ${convertToWord(computerChose)}. It's a draw!`;
    userChose_div.classList.add('yellow-glow')
    setTimeout(() => userChose_div.classList.remove('yellow-glow'), 500);
    console.log("DRAW");
}

/* Game function */
function game(userChoice) {
    const computerChoice = getComputerChoice ();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }



}

/* Function to obtain the users choice */
function main() {

    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();