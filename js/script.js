const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
let playerMove;
let computerMove;
let randomNumber;
let playerScore = 0;
let computerScore = 0;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log('wybór ruchu gracza to: ' + playerMove);
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    showResult();
}

function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function calculateScore(whoWin) {
    if (whoWin === "player") {
        playerScore = playerScore + 1;
    }
    if (whoWin === "computer") {
        computerScore = computerScore + 1;
    }
}

function showResult() {
    printMessage("Gracz " + playerScore + ":" + computerScore + " Komputer")
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log(argPlayerMove + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        calculateScore('player');
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        calculateScore('player');
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        calculateScore('player');
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        calculateScore('computer');
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click', function() { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function() { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function() { buttonClicked('nożyce'); });