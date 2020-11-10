function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch'
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(randomNumber == 2){
  playerMove = 'papier';
} else if(randomNumber == 3){
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch'
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrałeś');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrałeś');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrałeś');
} else {
  printMessage('nieznany ruch');
}
