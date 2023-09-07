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

    return {makeMove, getRow, getColumn, name, getValue};
}

const gameBoard = () => {
    const ROW = [new Array(3), new Array(3), new Array(3)];

    const addMove = (row, column, move) => {
        ROW[row][column] = move;
    }
        
    const getValue = () => console.log({ROW});
    return {ROW, addMove, getValue};
}

function getRandomInt(max) {
    return (Math.floor(Math.random() * max));
};

function enemyMove() {
    const enemy = playerPrototype("O");
    const board = gameBoard();
    const BOARD = document.querySelector(".tic-tac-toe");

    do {
        enemy.makeMove(getRandomInt(3), getRandomInt(3));
        let board_position = board.ROW[enemy.getRow()][enemy.getColumn()];
        switch (board_position) {
            case "O":
                continue;

            case "X":
                continue;

            default:
                let get_div = BOARD.getElementsByClassName(`${enemy.getRow()}-${enemy.getColumn()}`);
                console.log(get_div);
                board.addMove(enemy.getRow(), enemy.getColumn(), enemy.name);
                get_div.textContent = "O";
                return;
        }        
    }
    while (count != 4);
}

function Tic_Tac_Toe() {
    const player1 = playerPrototype("X");
    const board = gameBoard();
    const BOARD = document.querySelector(".tic-tac-toe");

    let BOARD_children = Array.from(BOARD.children)
    BOARD_children.forEach((element) => {
        element.addEventListener("click", () => {
            
            let attribute_row = parseInt(element.getAttribute("data-row"));
            let attribute_column = parseInt(element.getAttribute("data-column"));

            switch (board.ROW[attribute_row][attribute_column]) {
                case "X":
                    return console.log("X: spot taken");
                
                case "O":
                    return console.log("O: spot taken");
                
                default:
                    player1.makeMove(attribute_row, attribute_column);
                    board.addMove(player1.getRow(), player1.getColumn(), player1.name);
                    element.textContent = player1.name;
                    enemyMove();
                    break;
            }
        }
    )});
}

Tic_Tac_Toe();