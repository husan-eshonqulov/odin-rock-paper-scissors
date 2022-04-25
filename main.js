const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

addEventListeners();

function addEventListeners() {
    rock.addEventListener('click', rockHandle);
    paper.addEventListener('click', paperHandle);
    scissors.addEventListener('click', scissorsHandle);
}

function removeListeners() {
    rock.removeEventListener('click', rockHandle);
    paper.removeEventListener('click', paperHandle);
    scissors.removeEventListener('click', scissorsHandle);
}

function rockHandle() {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    const winner = getWinner(playerSelection, computerSelection);

    if (winner === 'player') player.innerText = Number(player.innerText) + 1;
    if (winner === 'computer') computer.innerText = Number(computer.innerText) + 1;
    if (isOver()) {
        removeListeners();
        showWinner(winner);
    }

    addPairsToGame(playerSelection, computerSelection);
}

function paperHandle() {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    const winner = getWinner(playerSelection, computerSelection);

    if (winner === 'player') player.innerText = Number(player.innerText) + 1;
    if (winner === 'computer') computer.innerText = Number(computer.innerText) + 1;
    if (isOver()) {
        removeListeners();
        showWinner(winner);
    }

    addPairsToGame(playerSelection, computerSelection);
}

function scissorsHandle() {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    const winner = getWinner(playerSelection, computerSelection);

    if (winner === 'player') player.innerText = Number(player.innerText) + 1;
    if (winner === 'computer') computer.innerText = Number(computer.innerText) + 1;
    if (isOver()) {
        removeListeners();
        showWinner(winner);
    }

    addPairsToGame(playerSelection, computerSelection);
}

function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const ranInd = Math.floor(Math.random() * 3);

    return hands[ranInd];
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') return 'computer';
    if (playerSelection === 'paper' && computerSelection === 'scissors') return 'computer';
    if (playerSelection === 'scissors' && computerSelection === 'rock') return 'computer';

    if (playerSelection === 'rock' && computerSelection === 'scissors') return 'player';
    if (playerSelection === 'paper' && computerSelection === 'rock') return 'player';
    if (playerSelection === 'scissors' && computerSelection === 'paper') return 'player';

    return 'draw';
}

function isOver() {
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');

    return player.innerText == 5 || computer.innerText == 5;
}

function addPairsToGame(playerSelection, computerSelection) {
    const winner = getWinner(playerSelection, computerSelection);
    const div = initPairs();
    switch (playerSelection) {
        case 'rock': div.childNodes[0].classList.add('fa-hand-rock-o'); break;
        case 'paper': div.childNodes[0].classList.add('fa-hand-paper-o'); break;
        case 'scissors': div.childNodes[0].classList.add('fa-hand-scissors-o'); break;
    }

    switch (computerSelection) {
        case 'rock': div.childNodes[2].classList.add('fa-hand-rock-o'); break;
        case 'paper': div.childNodes[2].classList.add('fa-hand-paper-o'); break;
        case 'scissors': div.childNodes[2].classList.add('fa-hand-scissors-o'); break;
    }

    switch (winner) {
        case 'player':
            div.childNodes[3].classList.add('fa-check');
            div.childNodes[3].classList.add('text-success');
            break;

        case 'computer':
            div.childNodes[3].classList.add('fa-times');
            div.childNodes[3].classList.add('text-danger');
            break;

        case 'draw':
            div.childNodes[3].classList.add('fa-link');
            div.childNodes[3].classList.add('text-secondary');
            break;
    }

    document.querySelector('.game').prepend(div);
}

function initPairs() {
    const div = document.createElement('div');
    div.classList.add('text-center');
    div.classList.add('mt-4');

    const i0 = document.createElement('i');
    i0.classList.add('fa');
    i0.classList.add('text-warning');
    i0.style.fontSize = '85px';

    const i1 = document.createElement('i');
    i1.classList.add('fa');
    i1.classList.add('fa-minus');
    i1.classList.add('text-secondary');
    i1.classList.add('mx-3');
    i1.style.fontSize = '50px';

    const i2 = document.createElement('i');
    i2.classList.add('fa');
    i2.classList.add('text-warning');
    i2.style.fontSize = '85px';

    const i3 = document.createElement('i');
    i3.classList.add('fa');
    i3.classList.add('text-secondary');
    i3.classList.add('ms-3');
    i3.style.fontSize = '55px';

    div.append(i0, i1, i2, i3);

    return div;
}

function showWinner(winner) {
    const span = document.createElement('span');
    span.classList.add('badge');
    span.classList.add('me-2');
    span.classList.add('p-3');
    span.style.fontSize = '30px';

    const button = document.createElement('button');
    button.innerText = 'Again';
    button.classList.add('btn');
    button.classList.add('btn-lg');
    button.classList.add('btn-warning');
    button.style.fontSize = '30px';

    if (winner === 'player') {
        span.innerText = 'WON';
        span.classList.add('bg-success');
    }
    else {
        span.innerText = 'LOST';
        span.classList.add('bg-danger');
    }

    const again = document.createElement('div');
    again.classList.add('text-center');
    again.classList.add('mx-auto');
    again.classList.add('mt-5');
    again.classList.add('d-flex');
    again.classList.add('justify-content-center');
    again.classList.add('align-items-center');
    again.style.width = '500px';
    again.style.height = '200px';
    again.style.backgroundColor = 'rgba(a,a,a,0.4)';
    again.style.position = 'fixed';
    again.style.top = '30%';
    again.style.left = '32%';
    again.append(span, button);

    document.querySelector('.game').prepend(again);

    button.addEventListener('click', () => {
        document.querySelector('.player').innerText = 0;
        document.querySelector('.computer').innerText = 0;
        document.querySelector('.game').innerText = '';
        again.classList.add('d-none');
        addEventListeners();
    });
}