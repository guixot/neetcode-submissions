class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const columns = Array.from({ length: 9 }, () => new Set<string>());
        const squares = Array.from({ length: 9 }, () => new Set<string>());

        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {
                const value = board[row][column];

                if (value !== ".") {
                    if (rows[row].has(value)) {
                        return false;
                    } else {
                        rows[row].add(value);
                    }

                    if (columns[column].has(value)) {
                        return false;
                    } else {
                        columns[column].add(value);
                    }

                    const squareIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);

                    if (squares[squareIndex].has(value)) {
                        return false;
                    } else {
                        squares[squareIndex].add(value);
                    }
                }
            }
        }

        return true;
    }
}
