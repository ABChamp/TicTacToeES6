'use strict';
// Node.js
var prompt = require('prompt') // readline
var Player = require('./player.js')
// import Player from './player.js'
// การบ้านคือเสมอ
const board = {
    1: '1', 2: '2', 3: '3',
    4: '4', 5: '5', 6: '6',
    7: '7', 8: '8', 9: '9'
}

// class
class TicTacToe {
    constructor() {
        this.winningLines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
            [1, 5, 6], [3, 5, 7], // diagonal
            [1, 4, 7], [2, 5, 8], [7, 8, 9] // vertical
        ];

        this.currentPlayer = 'O'

        this.players = {
            'O': new Player("P'Champ"),
            'X': new Player("P'Num"),
        }

    }

    start() {
        this.printBoard()
        prompt.start()
        // input
        prompt.get(['location'], (err, result) => {
            //console.log(`:${result.index}`);
            this.setBoard(result.location)

            if (this.checkWin()) {
                console.log(`${this.currentPlayer} : ${this.players[this.currentPlayer].name} Win!!`)
                return
            } else {
                this.switchPlayer()
                this.start()    
            }
        });
    }

    switchPlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }

    setBoard(location) {
        board[location] = this.currentPlayer
    }

    checkWin() {
        let checker = 0;
        for(let i=0; i< this.winningLines.length; i++) {
            checker = 0;
            for (let j = 0; j < this.winningLines[i].length; j++) {
                if (board[this.winningLines[i][j]] === this.currentPlayer) {
                  checker++;
                }
                if (checker === 3) {
                  return true;
                }
              }
        }
        return false;
    }

    printBoard() {
        console.log(`| ${board[1]} | ${board[2]} | ${board[3]} |\n| ${board[4]} | ${board[5]} | ${board[6]} |\n| ${board[7]} | ${board[8]} | ${board[9]} |`)
    }

}

let game = new TicTacToe()
game.start()