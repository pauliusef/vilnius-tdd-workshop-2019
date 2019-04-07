import React from 'react';
export const Game = ({
  player1,
  player2,
  activePlayer,
  board,
  onCellClicked
}) => {
  return (
    <div data-testid="game">
      <PlayerLabel id={1} name={player1} active={player1 === activePlayer} />
      <PlayerLabel id={2} name={player2} active={player2 === activePlayer} />
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => onCellClicked(rowIndex, colIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PlayerLabel = ({ id, name, active }) => (
  <h1 data-testid={`player${id}-title`} className={active ? 'bold' : undefined}>
    {name}
  </h1>
);
