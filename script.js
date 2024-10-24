let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScore();

/*
if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }  
}
*/

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
        result = 'Tie';
    }
    else if  ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        result = 'You Win';
    }
    else {
        result = 'You Lose';
    }
    

    if (result === 'You Win') {
        score.wins += 1;
    }
    else if (result === 'You Lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    /*
    alert (`You picked ${playerMove}, Computer picked ${computerMove} . ${result}. 
Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`);
    */

    document.querySelector('.js-moves').innerHTML = `You choose '${playerMove}' & Computer chooses '${computerMove}'`;

      
    document.querySelector('.js-result').innerHTML = result;

    updateScore();  
}





function updateScore() {
    document.querySelector('.js-score').innerHTML = 
        `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >=1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}