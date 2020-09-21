const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const result = document.querySelector('.result');
const resultPlayer = document.querySelector('.player--result');
const resultComputer = document.querySelector('.computer--result');
const message = document.querySelector(".messages-section");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const player = document.querySelector(".player");

let playerMove;
let computerMove;
let randomNumber;
let playerScore = 0;
let computerScore = 0;
let playerName = 0;

function enterUsername() {
    let title = document.createElement("h2");
    let wrapper = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");

    title.className = "modal__title";
    title.innerHTML = "PODAJ SWOJE IMIĘ";
    input.type = "text";
    input.placeholder = "Wpisz swoje imię..."
    input.className = "modal__input";
    button.className = "modal__button";
    button.innerHTML = "GRAJ";

    wrapper.appendChild(input);
    wrapper.appendChild(button);
    modalContainer.appendChild(title);
    modalContainer.appendChild(wrapper);

    input.focus();

    input.addEventListener('keyup', (e) => {
        playerName = e.target.value;
    });

    button.addEventListener('click', () => {
        buttonAction();
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            buttonAction();
        };
    });
};

enterUsername();

function buttonAction() {
    if (playerName.length < 3 || playerName === 0) {
        let warning = document.createElement("p");
        warning.className = "modal__warning";
        warning.innerHTML = "Wprowadź min. 3 znaki";
        modalContainer.appendChild(warning);
    } else if (playerName.length >= 3) {
        player.innerHTML = playerName;
        modal.classList.remove('modal--active');
        modalContainer.innerHTML = "";
    };
};

function getMoveName() {
    computer = Math.floor(Math.random() * 3 + 1);

    if (computer == 1) {
        return 'kamień';
    } else if (computer == 2) {
        return 'papier';
    } else if (computer == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + computer + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
};

function buttonClicked(argButtonName) {
    playerMove = argButtonName;
    computerMove = getMoveName();
    displayResult(playerMove, computerMove);
    showResult();
};

function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        calculateScore('player');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        calculateScore('player');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        calculateScore('player');
    } else if (argPlayerMove == argComputerMove) {
        return null;
    } else {
        calculateScore('computer');
    }
};

function calculateScore(whoWin) {
    if (whoWin === "player") {
        playerScore = playerScore + 1;
        if (playerScore === 5) {
            winner("WYGRAŁEŚ");
        }
    } else {
        computerScore = computerScore + 1;
        if (computerScore === 5) {
            winner("PRZEGRAŁEŚ");
        };
    };
};

function showResult() {
    resultPlayer.innerHTML = "Wybrał: " + playerMove.toUpperCase();
    resultComputer.innerHTML = "Wybrał: " + computerMove.toUpperCase();
    result.innerHTML = playerScore + " : " + computerScore;
};

function winner(result) {
    let winner = document.createElement("h2");
    let button = document.createElement("button");

    winner.className = "modal__title";
    winner.innerHTML = result;

    button.className = "modal__button modal__button--winner";
    button.innerHTML = "ZAGRAJ JESZCZE RAZ";

    modalContainer.appendChild(winner);
    modalContainer.appendChild(button);
    modal.classList.add('modal--active');


    button.addEventListener('click', () => {
        buttonWinner();
    });

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            buttonWinner();
        };
    });
};

function buttonWinner() {
    playerScore = 0;
    computerScore = 0;
    modal.classList.remove('modal--active');
    modalContainer.innerHTML = "";
    showResult();
};

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
