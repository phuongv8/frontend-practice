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
  switch (symbol) {
    case 'C':
      buffer = '0';
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '÷':
      console.log('÷');
      break;
    case '×':
      console.log('x');
      break;
    case '−':
      console.log('-');
      break;
    case '+':
      console.log('+');
      break;
    case '=':
      console.log('=');
      break;
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
