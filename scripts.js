const Player = (name, symbol) => {
    const playerSymbol = symbol;
    const playerName = name;
    const turnStatement = `${name}'s turn!`;
    return { playerSymbol, playerName, turnStatement };
}

const playerOne = Player("Player one", "X");
const playerTwo = Player("Player two", "O");

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    let playerTurn = true;

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            const turnStatement = document.querySelector("#turn");
            if (turnStatement.textContent === "Player one wins!" || turnStatement.textContent === "Player two wins!") {
                return;
            }
            else if (square.textContent === " " || square.textContent === "") {
                for (let i = 0; i < board.length; i++) {
                    if (square.id - 1 === i) {
                        if (playerTurn === true) {
                            board[i] = playerOne.playerSymbol;
                        }
                        else {
                            board[i] = playerTwo.playerSymbol;
                        }
                    }
                }
                for (let i = 0; i < board.length; i++) {
                    if (square.id - 1 === i) {
                        square.textContent = board[i];
                    }
                }
                playerTurn = !playerTurn;
                if (playerTurn === false) {
                    turnStatement.textContent = playerTwo.turnStatement;
                }
                else {
                    turnStatement.textContent = playerOne.turnStatement;
                }
            }
        })
    })

    

    
    return { board, playerTurn };
})();

const game = (() => {
    let player = "";
    let playerOneWin = false;
    let playerTwoWin = false;
    let playerTurn = true;

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            const turn = document.querySelector("#turn");
            if (gameBoard.board[0] === "X" && gameBoard.board[1] === "X" && gameBoard.board[2] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[0] === "X" && gameBoard.board[3] === "X" && gameBoard.board[6] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[0] === "X" && gameBoard.board[4] === "X" && gameBoard.board[8] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[1] === "X" && gameBoard.board[4] === "X" && gameBoard.board[7] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[2] === "X" && gameBoard.board[5] === "X" && gameBoard.board[8] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[2] === "X" && gameBoard.board[4] === "X" && gameBoard.board[6] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[3] === "X" && gameBoard.board[4] === "X" && gameBoard.board[5] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[6] === "X" && gameBoard.board[7] === "X" && gameBoard.board[8] === "X") {
                playerOneWin = true;
            }
            else if (gameBoard.board[0] === "O" && gameBoard.board[1] === "O" && gameBoard.board[2] === "O") {
                playerTwoWin = true;
            }  
            else if (gameBoard.board[0] === "O" && gameBoard.board[3] === "O" && gameBoard.board[6] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[0] === "O" && gameBoard.board[4] === "O" && gameBoard.board[8] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[1] === "O" && gameBoard.board[4] === "O" && gameBoard.board[7] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[2] === "O" && gameBoard.board[5] === "O" && gameBoard.board[8] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[2] === "O" && gameBoard.board[4] === "O" && gameBoard.board[6] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[3] === "O" && gameBoard.board[4] === "O" && gameBoard.board[5] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[6] === "O" && gameBoard.board[7] === "O" && gameBoard.board[8] === "O") {
                playerTwoWin = true;
            }
            else if (gameBoard.board[8] === "O" || gameBoard.board[8] === "X") {
                turn.textContent = "Draw!";
            }
            if (playerTwoWin === true) {
                turn.textContent = "Player two wins!";
            }
            else if (playerOneWin === true) {
                turn.textContent = "Player one wins!";
            }
        })
    })
})();