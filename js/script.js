{
		const stone = 'kamien';
		const paper = 'papier';
		const scissors = 'nożyce';

		const printMessage = function(msg){
			const div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}

		const clearMessages = function(){
			document.getElementById('messages').innerHTML = '';
		}

		const getMoveName = function(argMoveId){
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

		const playGame = function(playerInput){
			clearMessages();
			const randomNumber = Math.floor(Math.random() * 3 + 1);
			const computerMove = getMoveName(randomNumber);
			printMessage('Mój ruch to: ' + computerMove);
			const playerMove = getMoveName(playerInput);
			printMessage('Twój ruch to: ' + playerMove);
			displayResult(computerMove, playerMove);
			const gameResult = displayResult;
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
