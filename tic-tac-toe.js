const playerPrototype = (name) => {
    let move_column;
    let move_row;

    const makeMove = (column, row) => {
        move_column = column;
        move_row = row;
    }

    const getColumn = () => move_column;
    const getRow = () => move_row; 
    const getValue = () => console.log({move_column, move_row, name});

    return {makeMove, getColumn, getRow, name,getValue};
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

    const BOARD = document.querySelector(".tic-tac-toe > div");
    console.log(BOARD.getAttribute("class"));

    player1.makeMove(0, 2);
    player1.getValue();

    board.addMove(player1.getRow(), player1.getColumn(), player1.name);
    board.getValue();
}

Tic_Tac_Toe();