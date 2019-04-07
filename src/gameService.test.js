import { gameStatus } from './gameService';

test('X should win over first row', () => {
  // prettier-ignore
  const board = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', '']
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over second row', () => {
  // prettier-ignore
  const board = [
    ['', '', ''],
    ['X', 'X', 'X'],
    ['', '', '']
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over third row', () => {
  // prettier-ignore
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['X', 'X', 'X'],
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over first column', () => {
  // prettier-ignore
  const board = [
    ['X', '', ''],
    ['X', '', ''],
    ['X', '', ''],
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over second column', () => {
  // prettier-ignore
  const board = [
    ['', 'X', ''],
    ['', 'X', ''],
    ['', 'X', ''],
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over third column', () => {
  // prettier-ignore
  const board = [
    ['', '', 'X'],
    ['', '', 'X'],
    ['', '', 'X'],
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over left diagonal', () => {
  // prettier-ignore
  const board = [
    ['X', '', ''],
    ['', 'X', ''],
    ['', '', 'X'],
  ];
  expect(gameStatus(board)).toBe('X');
});

test('X should win over right diagonal', () => {
  // prettier-ignore
  const board = [
    ['', '', 'X'],
    ['', 'X', ''],
    ['X', '', ''],
  ];
  expect(gameStatus(board)).toBe('X');
});

/* ==================================================================== */

test('O should win over first row', () => {
  // prettier-ignore
  const board = [
    ['O', 'O', 'O'],
    ['', '', ''],
    ['', '', '']
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over second row', () => {
  // prettier-ignore
  const board = [
    ['', '', ''],
    ['O', 'O', 'O'],
    ['', '', '']
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over third row', () => {
  // prettier-ignore
  const board = [
    ['', '', ''],
    ['', '', ''],
    ['O', 'O', 'O'],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over first column', () => {
  // prettier-ignore
  const board = [
    ['O', '', ''],
    ['O', '', ''],
    ['O', '', ''],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over second column', () => {
  // prettier-ignore
  const board = [
    ['', 'O', ''],
    ['', 'O', ''],
    ['', 'O', ''],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over third column', () => {
  // prettier-ignore
  const board = [
    ['', '', 'O'],
    ['', '', 'O'],
    ['', '', 'O'],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over left diagonal', () => {
  // prettier-ignore
  const board = [
    ['O', '', ''],
    ['', 'O', ''],
    ['', '', 'O'],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('O should win over right diagonal', () => {
  // prettier-ignore
  const board = [
    ['', '', 'O'],
    ['', 'O', ''],
    ['O', '', ''],
  ];
  expect(gameStatus(board)).toBe('O');
});

test('should be a tie', () => {
  // prettier-ignore
  const board = [
    ['X', 'X', 'O'],
    ['O', 'O', 'X'],
    ['X', 'X', 'O'],
  ];
  expect(gameStatus(board)).toBeNull();
});
