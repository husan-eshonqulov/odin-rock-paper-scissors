function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const ranInd = Math.floor(Math.random() * 3);

    return choices[ranInd];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'paper') return 'You Lost! Paper beats Rock';
    if (playerSelection === 'paper' && computerSelection === 'scissors') return 'You Lost! Scissors beat Paper';
    if (playerSelection === 'scissors' && computerSelection === 'rock') return 'You Lost! Rock beats Scissors';

    if (playerSelection === 'rock' && computerSelection === 'scissors') return 'You Won! Rock beats Scissors';
    if (playerSelection === 'paper' && computerSelection === 'rock') return 'You Won! Paper beats Rock';
    if (playerSelection === 'scissors' && computerSelection === 'paper') return 'You Won! Scissors beat Paper';

    return 'Draw';
}

function game() {
    const choices = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection;

        do {
            playerSelection = prompt('Enter rock or paper or scissors');
            playerSelection = playerSelection.toLowerCase();
        } while (!choices.includes(playerSelection));
        
        const computerSelection = computerPlay();
        const status = playRound(playerSelection, computerSelection);
        console.log(status);
        if (status.includes('Won')) playerScore++;
        if (status.includes('Lost')) computerScore++;
    }

    console.log(`Player: ${playerScore}  -  Computer: ${computerScore}`);
}

game();