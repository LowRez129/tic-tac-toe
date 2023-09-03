const playerPrototype = (name) => {
    let Column;
    let Row;

    const makeMove = (column, row) => {
        Column = column;
        Row = row;
    }

    const getValue = () => console.log(Column, Row, {name});
    return {Column, Row, makeMove, getValue};
}

const gameBoard = () => {
    const ROW = [new Array(3), new Array(3), new Array(3)];

    const addMove = (column, row, move) => {
        ROW[row][column] = move;
    }
        
    const getValue = () => console.log({ROW});
    return {addMove, getValue};
}

const player1 = playerPrototype("X");
const board = gameBoard();

const tic_tac_toe = document.querySelector(".tic-tac-toe");
const div = document.createElement("div");

tic_tac_toe.append(div);
tic_tac_toe.append(document.createElement("div"));