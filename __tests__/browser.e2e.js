test('should register a game', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  expect(await getPlayer1Title()).toBe(player1);
  expect(await getPlayer2Title()).toBe(player2);
});

test('should show "X" after first player click', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);
  expect(await getACellAt(0)).toBe('');

  await clickACellAt(0);
  expect(await getACellAt(0)).toBe('X');
});

test('should show "O" after second player click', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);
  expect(await getACellAt(1)).toBe('');

  await clickACellAt(0);
  await clickACellAt(1);
  expect(await getACellAt(1)).toBe('O');
});

test('should show "X" after second click on the same cell', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);
  expect(await getACellAt(1)).toBe('');

  await clickACellAt(0);
  expect(await getACellAt(0)).toBe('X');
  await clickACellAt(0);
  expect(await getACellAt(0)).toBe('X');
  await clickACellAt(1);
  expect(await getACellAt(1)).toBe('O');
  await clickACellAt(1);
  expect(await getACellAt(1)).toBe('O');
});

test('"X" should win the game', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  await clickACellAt(0);
  await clickACellAt(4);
  expect(await hasWinner()).toBe(false);
  await clickACellAt(1);
  await clickACellAt(5);
  await clickACellAt(2);

  expect(await getWinnerMessage()).toBe(`${player1} won!!`);
});

test('"O" should win the game', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  await clickACellAt(4);
  await clickACellAt(0);
  expect(await hasWinner()).toBe(false);
  await clickACellAt(5);
  await clickACellAt(1);
  await clickACellAt(7);
  await clickACellAt(2);

  expect(await getWinnerMessage()).toBe(`${player2} won!!`);
});

test('active player should be bold', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);
  expect(await isPlayer1Bold()).toBe(true);
  clickACellAt(0);
  expect(await isPlayer2Bold()).toBe(true);
  clickACellAt(1);
  expect(await isPlayer1Bold()).toBe(true);
});

test('game should end in tie', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  expect(await hasTieMessage()).toBe(false);
  await clickACellAt(0);
  await clickACellAt(1);
  await clickACellAt(2);
  await clickACellAt(4);
  await clickACellAt(3);
  await clickACellAt(5);
  await clickACellAt(7);
  await clickACellAt(6);
  await clickACellAt(8);
  expect(await hasTieMessage()).toBe(true);
});

test('game should not end in tie', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  await newGame(player1, player2);

  expect(await hasTieMessage()).toBe(false);
  await clickACellAt(0);
  await clickACellAt(4);
  await clickACellAt(1);
  await clickACellAt(5);
  await clickACellAt(2);
  expect(await hasTieMessage()).toBe(false);
});

test('registration form should be hidden after game has started', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  expect(await hasRegistration()).toBe(true);
  await newGame(player1, player2);
  expect(await hasRegistration()).toBe(false);
});

test('game should be visible only after registration', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();

  expect(await hasGame()).toBe(false);
  await newGame(player1, player2);
  expect(await hasGame()).toBe(true);
});

async function hasGame() {
  return !!(await page.$('[data-testid="game"]'));
}

async function hasRegistration() {
  return !!(await page.$('[data-testid="registration"]'));
}

async function hasTieMessage() {
  return !!(await page.$('[data-testid="tie-message"]'));
}

async function isPlayer1Bold() {
  return await page.$eval('[data-testid="player1-title"]', el =>
    el.classList.contains('bold')
  );
}

async function isPlayer2Bold() {
  return await page.$eval('[data-testid="player2-title"]', el =>
    el.classList.contains('bold')
  );
}

function getWinnerMessage() {
  return page.$eval('[data-testid="winner-message"]', el => el.innerText);
}

async function hasWinner() {
  return !!(await page.$('[data-testid="winner-message"]'));
}

function clickACellAt(index) {
  return page.$$eval('td', (tds, _index) => tds[_index].click(), index);
}

function getACellAt(index) {
  return page.$$eval('td', (tds, _index) => tds[_index].innerText, index);
}

function getPlayer2Title() {
  return page.$eval('[data-testid="player2-title"]', el => el.innerText);
}

function getPlayer1Title() {
  return page.$eval('[data-testid="player1-title"]', el => el.innerText);
}

async function newGame(player1, player2) {
  const newLocal = '[data-testid="player1"]';
  await page.type(newLocal, player1);
  await page.type('[data-testid="player2"]', player2);
  await page.click('[data-testid="new-game"]');
}

function navigate() {
  return page.goto('http://localhost:3000');
}
