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
const word = 'RAMEN';
let currRow = 0;
let currTile = 0;

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

const addLetter = letter => {
  const guessingTile = document.getElementById(
    `row-${currRow}-tile-${currTile}`
  );
  guessingTile.textContent = letter;
  guessingTile.dataset.letter = letter;
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
  if (currTile === 5) {
    if (checkCurrentRow()) {
      console.log('Correct!');
    } else {
      console.log('Incorrect! Try again.');
    }
    moveToNextRow();
  } else {
    console.log('Please fill the entire row before checking.');
  }
};

const moveToNextTile = () => {
  if (currTile < 5) {
    currTile++;
  } else {
    return;
  }
  // Stop and check row
  // Move to next row after check
};

const moveToNextRow = () => {
  currRow++;
  currTile = 0;
  if (currRow === 6) {
    stopGame();
  }
};

const stopGame = () => {
  console.log('stop game');
};

const handleButtonClick = e => {
  const letter = e.target.textContent;
  console.log(currTile);

  if (letter === '⌫') {
    handleDelete();
  } else if (letter === 'Enter') {
    handleEnter();
  } else {
    addLetter(letter);
    moveToNextTile();
  }
};

const checkRow = () => {
  if (currTile === 5) {
  }
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

generateKeyboard(keys);
generateRowsAndTiles(numRows, numTiles);
