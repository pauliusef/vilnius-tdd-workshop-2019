import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Registration } from './Registration';
import { Game } from './Game';
import { gameStatus } from './gameService';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [activeMark, setActiveMark] = useState('X');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [winner, setWinner] = useState('');
  const [move, setMove] = useState(0);
  const [isTie, setTie] = useState(false);

  const handleNewGame = (player1, player2) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setMove(1);
  };
  const handleCellClicked = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === '') {
      const _board = board.map(row => [...row]);

      _board[rowIndex][colIndex] = activeMark;

      checkBoardState(_board);

      setActiveMark(activeMark === 'X' ? 'O' : 'X');
      setBoard(_board);
      setMove(move + 1);
    }
  };

  const checkBoardState = _board => {
    const status = gameStatus(_board);

    if (status === 'X') {
      setWinner(player1);
    } else if (status === 'O') {
      setWinner(player2);
    } else {
      setTie(move === 9);
    }
  };

  return (
    <div className="App">
      {move === 0 && <Registration onNewGame={handleNewGame} />}
      {move > 0 && (
        <Game
          player1={player1}
          player2={player2}
          board={board}
          activePlayer={activeMark === 'X' ? player1 : player2}
          onCellClicked={handleCellClicked}
        />
      )}
      {winner && <div data-testid="winner-message">{winner} won!!</div>}
      {isTie && <div data-testid="tie-message">It's a tie!!</div>}
    </div>
  );
}

export default App;
