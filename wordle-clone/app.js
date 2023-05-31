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

const tileRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

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

const handleButtonClick = e => {
  console.log(e.target.textContent);
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

const generateRowsAndTiles = tileRows => {
  const tileContainer = document.querySelector('.tile-container');

  tileRows.forEach((row, rowIndex) => {
    const rowElement = createRowElement(rowIndex);
    tileContainer.appendChild(rowElement);

    row.forEach(tileIndex => {
      const tileElement = createTileElement(rowIndex, tileIndex);
      rowElement.appendChild(tileElement);
    });
  });
};

generateKeyboard(keys);
generateRowsAndTiles(tileRows);
