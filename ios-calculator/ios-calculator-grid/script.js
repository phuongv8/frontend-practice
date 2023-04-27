const screen = document.querySelector('.screen');

let buffer = '0';

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  updateScreen();
}

function handleNumber(number) {
  if (buffer === '0') {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleSymbol(symbol) {
  if (symbol === 'C') {
    buffer = '0';
  }
}

function updateScreen() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
