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

generateKeyboard(keys);
