const gameBoard = (() => {
    let board = ["X", "X", "O", "X", "O", "X", "O", "O", "X"];

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", () => {
            let elementClicked = square.id;
            for (let i = 0; i < board.length; i++) {
                if (elementClicked - 1 === i) {
                    square.textContent = board[i];
                }
            }
        })
    })
})();

