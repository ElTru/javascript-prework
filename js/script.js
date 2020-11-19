{	function playGame(playerInput){
		function printMessage(msg){
			const div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}

		function clearMessages(){
			document.getElementById('messages').innerHTML = '';
		}

		clearMessages();

		const stone = 'kamien';
		const paper = 'papier';
		const scissors = 'nożyce';

		function getMoveName(argMoveId){
		  if(argMoveId == 1){
		    return stone;
		  } else if(argMoveId == 2){
		    return paper;
			} else if(argMoveId == 3){
				return scissors;
			} else {
		    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		    return 'nieznany ruch';
		  }
		}

		const displayResult = function(argComputerMove, argPlayerMove){
			if( argComputerMove == stone && argPlayerMove == paper){
		    printMessage('Ty wygrywasz!');
			} else if( argComputerMove == stone && argPlayerMove == stone){
			  printMessage('Remis');
			} else if( argComputerMove == stone && argPlayerMove == scissors){
			  printMessage('Przegrałeś');
			} else if( argComputerMove == paper && argPlayerMove == scissors){
			  printMessage('Ty wygrywasz!');
			} else if( argComputerMove == paper && argPlayerMove == paper){
			  printMessage('Remis');
			} else if( argComputerMove == paper && argPlayerMove == stone){
			  printMessage('Przegrałeś');
			} else if( argComputerMove == scissors && argPlayerMove == stone){
			  printMessage('Ty wygrywasz!');
			} else if( argComputerMove == scissors && argPlayerMove == scissors){
			  printMessage('Remis');
			} else if( argComputerMove == scissors && argPlayerMove == paper){
			  printMessage('Przegrałeś');
			} else {
		    printMessage('nieznany ruch');
				return 'nieznany ruch';
		  }
		}

		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		const computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove);

		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);

		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove);

		const gameResult = displayResult;

		console.log(gameResult);
	}

	const playRock = document.getElementById('play-rock');

	playRock.addEventListener('click', function(){
		playGame(1);
	});

	const playPaper = document.getElementById('play-paper');

	playPaper.addEventListener('click', function(){
		playGame(2);
	});

	const playScissors = document.getElementById('play-scissors');

	playScissors.addEventListener('click', function(){
		playGame(3);
	});
}

/* if(randomNumber == 1){
	computerMove = 'kamień';
} else if(randomNumber == 2){
	computerMove = 'papier';
} else if(randomNumber == 3){
	computerMove = 'nożyce';
} else {
	computerMove = 'nieznany ruch'
} */

/* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

/* if(playerInput == '1'){
	playerMove = 'kamień';
} else if(randomNumber == 2){
	playerMove = 'papier';
} else if(randomNumber == 3){
	playerMove = 'nożyce';
} else {
	playerMove = 'nieznany ruch'
} */

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
