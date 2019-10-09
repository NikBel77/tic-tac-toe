class TicTacToe {
    constructor() {
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.x = [];
        this.o = [];
        this.player = 0;
    }

    getCurrentPlayerSymbol() {
        if (this.player === 0) {
            return ("x");
        }
        else {
            return ("o");
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[columnIndex][rowIndex] === null) {
            if (this.player === 0) {
                this.field[columnIndex][rowIndex] = "x";
                this.x.push([columnIndex, rowIndex]);
                this.player = 1;
            }
            else if (this.player === 1) {
                this.field[columnIndex][rowIndex] = "o";
                this.o.push([columnIndex, rowIndex]);
                this.player = 0;
            }
        }
    }

    isFinished() {
        if (this.getWinner() != null || this.isDraw() === true) {
            return (true);
        }
        return (false);
    }

    getWinner() {
        //for "x"
        let col1 = 0,
            col2 = 0,
            col3 = 0,
            row1 = 0,
            row2 = 0,
            row3 = 0,
            dia1 = 0,
            dia2 = 0;
        for (let pos of this.x) {
            if (pos[0] === 0) {
                col1 += 1;
            }
            if (pos[0] === 1) {
                col2 += 1;
            }
            if (pos[0] === 2) {
                col3 += 1;
            }
            if (pos[1] === 0) {
                row1 += 1;
            }
            if (pos[1] === 1) {
                row2 += 1;
            }
            if (pos[1] === 2) {
                row3 += 1;
            }
            if (pos[0] === 0 && pos[1] === 0) {
                dia1 += 1;
            }
            if (pos[0] === 2 && pos[1] === 2) {
                dia1 += 1;
            }
            if (pos[0] === 0 && pos[1] === 2) {
                dia2 += 1;
            }
            if (pos[0] === 2 && pos[1] === 0) {
                dia2 += 1;
            }
            if (pos[0] === 1 && pos[1] === 1) {
                dia1 += 1;
                dia2 += 1;
            }
        }
        if (col1 === 3 || col2 === 3 || col3 === 3 || row1 === 3 || row2 === 3 || row3 === 3 || dia1 === 3 || dia2 === 3) {
            return ("x");
        }
        //for "o"
        col1 = 0;
        col2 = 0;
        col3 = 0;
        row1 = 0;
        row2 = 0;
        row3 = 0;
        dia1 = 0;
        dia2 = 0;
        for (let pos of this.o) {
            if (pos[0] === 0) {
                col1 += 1;
            }
            if (pos[0] === 1) {
                col2 += 1;
            }
            if (pos[0] === 2) {
                col3 += 1;
            }
            if (pos[1] === 0) {
                row1 += 1;
            }
            if (pos[1] === 1) {
                row2 += 1;
            }
            if (pos[1] === 2) {
                row3 += 1;
            }
            if (pos[0] === 0 && pos[1] === 0) {
                dia1 += 1;
            }
            if (pos[0] === 2 && pos[1] === 2) {
                dia1 += 1;
            }
            if (pos[0] === 0 && pos[1] === 2) {
                dia2 += 1;
            }
            if (pos[0] === 2 && pos[1] === 0) {
                dia2 += 1;
            }
            if (pos[0] === 1 && pos[1] === 1) {
                dia1 += 1;
                dia2 += 1;
            }
        }
        if (col1 === 3 || col2 === 3 || col3 === 3 || row1 === 3 || row2 === 3 || row3 === 3 || dia1 === 3 || dia2 === 3) {
            return ("o");
        }
        return (null);
    }

    noMoreTurns() {
        for (let el of this.field) {
            for (let el2 of el) {
                if (el2 === null) {
                    return (false);
                }
            }
        }
        return (true);
    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return (true);
        }
        return (false);
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.field[colIndex][rowIndex]);
    }
}

module.exports = TicTacToe;
