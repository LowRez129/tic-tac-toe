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
    let BOARD_children = Array.from(BOARD.children)
    BOARD_children.forEach((element) => {
        element.addEventListener("click", () => {
            const getRandomInt = (max) => {
                return (Math.floor(Math.random() * max));
           };
       
           const checkBoardPosition = (value) => {
               switch (BOARD_children[value].textContent) {
                   case "O":
                       return console.log("O: taken");
       
                   case "X":
                       return console.log("X: taken by player");
       
                   default:
                       BOARD_children[value].textContent = "O";
               }
           };

            if (`${player1.getRow()}-${player1.getColumn()}` == element.getAttribute("class")) {
                element.textContent = "X";
                checkBoardPosition(getRandomInt(9));
            }
        }
    )});

    console.log(BOARD_children);

    player1.makeMove(0, 2);
    player1.getValue();

    board.addMove(player1.getRow(), player1.getColumn(), player1.name);
    board.getValue();
}

Tic_Tac_Toe();