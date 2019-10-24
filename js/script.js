function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;
playerMove = 'Papier. ';
computerMove = 'kamień';
printMessage(playerMove + 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');