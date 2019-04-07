export function gameStatus(board) {
  if (gameStatusForPlayer(board, 'X')) {
    return 'X';
  } else if (gameStatusForPlayer(board, 'O')) {
    return 'O';
  } else {
    return null;
  }
}

const gameStatusForPlayer = (board, player) => {
  return (
    checkRow(board, 0, is(player)) ||
    checkRow(board, 1, is(player)) ||
    checkRow(board, 2, is(player)) ||
    checkCol(board, 0, is(player)) ||
    checkCol(board, 1, is(player)) ||
    checkCol(board, 2, is(player)) ||
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  );
};

const checkRow = (board, rowIndex, cond) => {
  return board[rowIndex].every(cond);
};

const checkCol = (board, colIndex, cond) => {
  return board.reduce((agg, row) => {
    return agg && cond(row[colIndex]);
  }, true);
};

const is = player => cell => cell === player;
