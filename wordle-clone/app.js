const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Enter',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '⌫',
];

const numRows = 6;
const numTiles = 5;
const word = 'MEETS';
let currRow = 0;
let currTile = 0;
let isGameEnd = false;

const createKeyboardButton = key => {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = key;
  buttonElement.id = key;
  buttonElement.addEventListener('click', handleButtonClick);
  return buttonElement;
};

const generateKeyboard = keys => {
  const keyboardElement = document.querySelector('.keyboard-container');

  keys.forEach(key => {
    const buttonElement = createKeyboardButton(key);
    keyboardElement.appendChild(buttonElement);
  });
};

const createRowElement = rowIndex => {
  const rowElement = document.createElement('div');
  rowElement.id = `row-${rowIndex}`;
  return rowElement;
};

const createTileElement = (rowIndex, tileIndex) => {
  const tileElement = document.createElement('div');
  tileElement.id = `row-${rowIndex}-tile-${tileIndex}`;
  tileElement.classList.add('tile');
  return tileElement;
};

const generateTile = (parentElement, rowIndex, tileIndex) => {
  const tileElement = createTileElement(rowIndex, tileIndex);
  parentElement.appendChild(tileElement);
};

const generateRow = (parentElement, rowIndex, numTiles) => {
  const rowElement = createRowElement(rowIndex);
  parentElement.appendChild(rowElement);

  for (let tileIndex = 0; tileIndex < numTiles; tileIndex++) {
    generateTile(rowElement, rowIndex, tileIndex);
  }
};

const generateRowsAndTiles = (numRows, numTiles) => {
  const tileContainer = document.querySelector('.tile-container');

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    generateRow(tileContainer, rowIndex, numTiles);
  }
};

const addLetterToTile = letter => {
  const guessingTile = document.getElementById(
    `row-${currRow}-tile-${currTile}`
  );

  if (guessingTile) {
    guessingTile.textContent = letter;
    guessingTile.dataset.letter = letter;
  }
};

const checkCurrentRow = () => {
  const wordInRow = Array.from(
    { length: numTiles },
    (_, tileIndex) =>
      document.getElementById(`row-${currRow}-tile-${tileIndex}`).dataset
        .letter || ''
  ).join('');

  return wordInRow === word;
};

const moveToNextTile = () => {
  if (currTile < numTiles) {
    currTile++;
  } else {
    return;
  }
};

const moveToNextRow = () => {
  currRow++;
  currTile = 0;
};

const handleDelete = () => {
  if (currTile > 0) {
    currTile--;
  }
  const guessingTile = document.getElementById(
    `row-${currRow}-tile-${currTile}`
  );
  guessingTile.textContent = '';
  guessingTile.dataset.letter = '';
};

const handleEnter = () => {
  if (currTile === numTiles) {
    applyColorToTiles();
    if (checkCurrentRow()) {
      showMessage('You got a cheese >//<', false);
      isGameEnd = true;
    } else {
      if (currRow >= numRows - 1) {
        showMessage('oh noooooo', false);
        isGameEnd = true;
        return;
      } else {
        moveToNextRow();
      }
    }
  } else {
    showMessage('Fill the entire row before checking or else', true);
  }
};

const handleButtonClick = e => {
  const letter = e.target.textContent;
  console.log(currTile);

  if (!isGameEnd) {
    if (letter === '⌫') {
      handleDelete();
    } else if (letter === 'Enter') {
      handleEnter();
    } else {
      addLetterToTile(letter);
      moveToNextTile();
    }
  }
};

const showMessage = (message, hideMessage) => {
  const messageDisplay = document.querySelector('.message-container');
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageDisplay.appendChild(messageElement);
  if (hideMessage) {
    setTimeout(() => messageDisplay.removeChild(messageElement), 800);
  }
};

const updateTileColor = (tileElement, colorClass) => {
  tileElement.classList.add(colorClass);
};

const applyColorToTiles = () => {
  for (let i = 0; i < numTiles; i++) {
    const guessingTile = document.getElementById(`row-${currRow}-tile-${i}`);
    const letter = guessingTile.dataset.letter;

    setTimeout(() => {
      guessingTile.classList.add('flip');
      if (letter === word[i]) {
        updateTileColor(guessingTile, 'green-overlay');
      } else if (word.includes(letter)) {
        updateTileColor(guessingTile, 'yellow-overlay');
      } else {
        updateTileColor(guessingTile, 'grey-overlay');
      }
    }, 500 * i);
  }
};

generateKeyboard(keys);
generateRowsAndTiles(numRows, numTiles);
