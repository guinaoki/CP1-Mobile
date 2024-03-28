export const hasWinner = (tableState, lastCellId) => {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];


    const filteredCombos = lastCellId !== undefined ?
        winningCombos.filter(combo => combo.includes(lastCellId)) :
        winningCombos;

    for (let combo of filteredCombos) {
        const [a, b, c] = combo;
        if (
            tableState[a] !== null && 
            tableState[a] === tableState[b] && 
            tableState[b] === tableState[c]
        ) {
            return true; 
        }
    }

    return false; 
};
