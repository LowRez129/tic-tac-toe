const playerPrototype = (name) => {
    const makeMove = (column, row) => {
        return {column, row};
    }

    const getValue = () => console.log({name});
    return {makeMove, getValue};
}

const gameBoard = () => {
    const ROW = [new Array(3), new Array(3), new Array(3)];

    const addMove = (column, row, move) => {
        ROW[row][column] = move;
    }
        
    const getValue = () => console.log({ROW});
    return {addMove, getValue};
}

function Tic_Tac_Toe() {
    const player1 = playerPrototype("X");
    const board = gameBoard();

    player1.makeMove(1, 2);
    player1.getValue();
    console.log();

   // board.addMove();

    const tic_tac_toe = document.querySelector(".tic-tac-toe");
    const div = document.createElement("div");

    tic_tac_toe.append(div);
    tic_tac_toe.append(document.createElement("div"));
}

Tic_Tac_Toe();