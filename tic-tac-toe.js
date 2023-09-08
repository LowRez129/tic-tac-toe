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
    const POSITION = [new Array(3), new Array(3), new Array(3)];

    const getPOSITION = () => POSITION;

    const addMove = (row, column, move) => {
        POSITION[row][column] = move;
    }
        
    const getValue = () => console.log({POSITION});
    return {POSITION, getPOSITION, addMove, getValue};
}

function Tic_Tac_Toe() {
    const player1 = playerPrototype("X");
    const enemy = playerPrototype("O");
    const board = gameBoard();
    const TIC_TAC_TOE = document.querySelector(".tic-tac-toe");

    const getRandomInt = (max) => {
        return (Math.floor(Math.random() * max));
    };
    
    const enemyMove = () => {
        do {
            enemy.makeMove(getRandomInt(3), getRandomInt(3));
            enemy.getValue();
            let board_position = board.POSITION[enemy.getRow()][enemy.getColumn()];
            switch (board_position) {
                case "O":
                    console.log("O: taken by enemy");
                    break;
    
                case "X":
                    console.log("X: taken by player");
                    break;
    
                default:
                    const div = TIC_TAC_TOE.querySelector(`.r${enemy.getRow()}-c${enemy.getColumn()}`);
                    div.textContent = enemy.name;
                    board.addMove(enemy.getRow(), enemy.getColumn(), enemy.name);
                    //document.querySelector().textContent = "O";
                    return;
            }        
        }
        while (true);
    }

    let BOARD_children = Array.from(TIC_TAC_TOE.children)
    BOARD_children.forEach((element) => {
        element.addEventListener("click", () => {
            
            let attribute_row = parseInt(element.getAttribute("data-row"));
            let attribute_column = parseInt(element.getAttribute("data-column"));

            switch (board.POSITION[attribute_row][attribute_column]) {
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