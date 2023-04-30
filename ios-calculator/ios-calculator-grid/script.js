const screen = document.querySelector('.screen');

let buffer = '0';
let calculateTotal = 0;
let prevOperator;
let justCalculated = false;

const mathOperations = {
  '+': (a, b) => a + b,
  '−': (a, b) => a - b,
  '×': (a, b) => a * b,
  '÷': (a, b) => a / b,
};

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  updateScreen();
}

function handleNumber(number) {
  if (buffer === '0' || justCalculated) {
    buffer = number;
    justCalculated = false;
  } else {
    buffer += number;
  }
  console.log(buffer);
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
    case '×':
    case '−':
    case '+':
      performOperation(symbol);
      break;
    case '=':
      justCalculated = true;
      if (prevOperator === null) {
        return;
      }

      performOperation(parseInt(buffer));
      prevOperator = null;
      buffer = '' + calculateTotal;
      calculateTotal = 0;

      break;
  }
}

function performOperation(symbol) {
  const intBuffer = parseInt(buffer);
  if (calculateTotal === 0) {
    calculateTotal = intBuffer;
  } else {
    applyMath(intBuffer);
  }

  prevOperator = symbol;
  buffer = '0';
}

function applyMath(intBuffer) {
  if (prevOperator in mathOperations) {
    if (prevOperator === '÷' && intBuffer === 0) {
      calculateTotal = Infinity;
    } else {
      calculateTotal = mathOperations[prevOperator](calculateTotal, intBuffer);
    }
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
