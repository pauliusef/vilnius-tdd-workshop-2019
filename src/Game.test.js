import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Game } from './Game';

afterEach(cleanup);

it('should show player1 in bold', () => {
  const { queryByTestId } = render(
    <Game
      player1="Jonas"
      player2="Petras"
      board={[['']]}
      activePlayer="Jonas"
    />
  );

  expect(queryByTestId('player1-title').classList.contains('bold')).toBe(true);
});

it('should show player2 in bold', () => {
  const { queryByTestId } = render(
    <Game
      player1="Jonas"
      player2="Petras"
      board={[['']]}
      activePlayer="Petras"
    />
  );

  expect(queryByTestId('player2-title').classList.contains('bold')).toBe(true);
});
