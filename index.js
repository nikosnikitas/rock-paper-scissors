/********************************************
*   Script for Rock, Paper, Scissors game.  *
*   Author: Nikos-Nikitas                   *
*   GitHub: https://github.com/nikosnikitas *
*********************************************/
//  Helper functions for faster development.

//  Print something! (python-style print :) )
const print = (something) => console.log(something);

//  Get a random number from min to max (but not the max!)
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min) + min);
}

//////////////////////////////////////////
//  Test Output:                        //
//  print(getRandomNumber(1,11));       //
//                                      //
//  And now the game's functions.       //
//////////////////////////////////////////

//  Helper function to update the score.
function update(el, cm, pm) {

    let res = playTurn(cm, pm);
   
    el.innerHTML = "<p>" + "<strong>Player plays:</strong> " + pm + "<br/>" + "<strong>Computer plays: </strong>" + 
    cm + "<br/>" + "<strong>Result: </strong>" + res + "</p>" ;
    }

//  Picks a random move for the Computer.
function computerTurn() {
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    let randNum = getRandomNumber(0, moves.length);
    let move = moves[randNum];

    return move;
}

//  Takes Player's move from the button selected.
function playerTurn() {

    const body = document.querySelector('body');
    const container = document.querySelector('.container');

    const rock = document.createElement('button');
    rock.innerText = "Rock";
    rock.value = "ROCK";
    
    const paper = document.createElement('button');
    paper.innerText = "Paper";
    paper.value = "PAPER";

    const scissors = document.createElement('button');
    scissors.innerText = "Scissors";
    scissors.value = "SCISSORS";

    const buttons = [rock, paper, scissors]

    buttons.forEach((button) => {
        container.appendChild(button);
        button.addEventListener('click',
            (e) => { 
                e.preventDefault();
                update(document.getElementById('result'), computerTurn(), button.value);
                }
            );
        }
    );
}

//  Plays a turn of "Rock, Paper, Scissors" -> Using player's and computer's moves generates a result.
function playTurn(computerMove, playerMove) {

    let result = "";

    if (computerMove === playerMove) {
        return result = "It's a draw!";
    }

    if (computerMove === "ROCK") {
        
        if (playerMove === "PAPER") {
            return result = "Player wins!";
        }

        if (playerMove === "SCISSORS") {
            return result = "Computer wins!";
        }
    }

    if (computerMove === "PAPER") {
        
        if (playerMove === "ROCK") {
            return result = "Computer wins!";
        }

        if (playerMove === "SCISSORS") {
            return result = "Player wins!";
        }
    }

    if (computerMove === "SCISSORS") {

        if (playerMove === "ROCK") {
            return result = "Player wins!";
        }

        if (playerMove === "PAPER") {
            return result = "Computer wins!";
        }
    }
}
//  Main game loop.
function main() {

    const startGame = document.querySelector('#start'); 
    startGame.removeEventListener('click', main);
    startGame.remove();

    playerTurn();

    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    
    const result = document.createElement('div');
    result.setAttribute('id','result');
    container.appendChild(result);

}

//  Builds the starter UI.
function start() {
    const header = document.createElement('h1');
    header.innerHTML =  "Rock Paper Scissors" + "<br/>" + 
                        "Author: <a href='https://github.com/nikosnikitas'>Nikos-Nikitas</a>";
    const container = document.querySelector('.container');
    const startGame = document.createElement('button');
    startGame.setAttribute('id', 'start');
    startGame.innerText = "Click to Play";
    startGame.addEventListener('click', main);
    container.appendChild(header);
    container.appendChild(startGame);

    }

//  Starting the game on body's load.
document.body.addEventListener('load', start());
