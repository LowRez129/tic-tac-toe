const playerPrototype = (name) => {
    let move_column;
    let move_row;

    const makeMove = (row, column) => {
        move_column = column;
        move_row = row;
    }

    const getColumn = () => move_column;
    const getRow = () => move_row; 
    const getValue = () => console.log({move_column, move_row, name});

    return {makeMove, getColumn, getRow, name, getValue};
}

const gameBoard = () => {
    const ROW = [new Array(3), new Array(3), new Array(3)];

    const addMove = (row, column, move) => {
        ROW[row][column] = move;
    }
        
    const getValue = () => console.log({ROW});
    return {addMove, getValue};
}

function Tic_Tac_Toe() {
    const player1 = playerPrototype("X");
    const player2 = playerPrototype("O");
    const board = gameBoard();

    const BOARD = document.querySelector(".tic-tac-toe");
    BOARD.childNodes.forEach((element) => {
        element.addEventListener("click", () => {
            if (`${player1.getRow()}-${player1.getColumn()}` == element.getAttribute("class")) {
                console.log(`${player1.getRow()}-${player1.getColumn()}`, "=", element.getAttribute("class"));
                element.textContent = player1.name;
                //player2.makeMove();
            }
        }
    )});

    player1.makeMove(0, 2);
    player1.getValue();

    board.addMove(player1.getRow(), player1.getColumn(), player1.name);
    board.getValue();
}

Tic_Tac_Toe();