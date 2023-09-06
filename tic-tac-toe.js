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
    let count = 0;
    BOARD_children.forEach((element) => {
        element.addEventListener("click", () => {

            function getRandomInt(max) {
                return (Math.floor(Math.random() * max));
            };

            function enemyMove() {
                do {
                    let this_child = BOARD_children[getRandomInt(9)];
                    switch (this_child.textContent) {
                        case "O":
                            continue;

                        case "X":
                            continue;

                        default:
                            return this_child.textContent = "O";
                    }        
                }
                while (true);
            };

            switch (element.textContent) {
                case "O":
                    return console.log("O: taken");

                case "X":
                    return console.log("X: taken by player");

                default:
                    element.textContent = "X";
                    switch (count) {
                        case 4:
                            break;

                        default:
                            count += 1;
                            enemyMove();
                    }
            }
        }
    )});
}

Tic_Tac_Toe();