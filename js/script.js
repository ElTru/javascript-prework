function playGame(playerInput){
	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}
	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}
	clearMessages();
	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if(argMoveId == 2){
	    return 'papier';
		} else if(argMoveId == 3){
			return 'nożyce';
		} else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    return 'nieznany ruch';
	  }
	}
	function displayResult(argComputerMove, argPlayerMove){
		if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	    printMessage('Ty wygrywasz!');
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		  printMessage('Remis');
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		  printMessage('Przegrałeś');
		} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		  printMessage('Ty wygrywasz!');
		} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
		  printMessage('Remis');
		} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		  printMessage('Przegrałeś');
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		  printMessage('Ty wygrywasz!');
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		  printMessage('Remis');
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		  printMessage('Przegrałeś');
		} else {
	    printMessage('nieznany ruch');
			return 'nieznany ruch';
	  }
	}
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	let computerMove = getMoveName(randomNumber);
	/* if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if(randomNumber == 2){
	  computerMove = 'papier';
	} else if(randomNumber == 3){
	  computerMove = 'nożyce';
	} else {
	  computerMove = 'nieznany ruch'
	} */
	printMessage('Mój ruch to: ' + computerMove);
/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */
	console.log('Gracz wpisał: ' + playerInput);
	let playerMove = getMoveName(playerInput);
	/* if(playerInput == '1'){
	  playerMove = 'kamień';
	} else if(randomNumber == 2){
	  playerMove = 'papier';
	} else if(randomNumber == 3){
	  playerMove = 'nożyce';
	} else {
	  playerMove = 'nieznany ruch'
	} */
	printMessage('Twój ruch to: ' + playerMove);
	/* if(computerMove == 'kamień' && playerMove == 'papier'){
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
	} */
	let gameResult = displayResult(computerMove, playerMove);
	console.log(gameResult);
}
let playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function(){
	playGame(1);
});
let playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function(){
	playGame(2);
});
let playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function(){
	playGame(3);
});
