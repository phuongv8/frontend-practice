const screen = document.querySelector('.calculator__screen');

let inputNumber = '0';
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
  if (inputNumber === '0' || justCalculated) {
    inputNumber = number;
    justCalculated = false;
  } else {
    inputNumber += number;
  }
  console.log(inputNumber);
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      inputNumber = '0';
      break;
    case '←':
      if (inputNumber.length === 1) {
        inputNumber = '0';
      } else {
        inputNumber = inputNumber.substring(0, inputNumber.length - 1);
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

      performOperation(parseInt(inputNumber));
      prevOperator = null;
      inputNumber = '' + calculateTotal;
      calculateTotal = 0;

      break;
  }
}

function performOperation(symbol) {
  const parsedNumber = parseInt(inputNumber);
  if (calculateTotal === 0) {
    calculateTotal = parsedNumber;
  } else {
    applyMath(parsedNumber);
  }

  prevOperator = symbol;
  inputNumber = '0';
}

function applyMath(parsedNumber) {
  if (prevOperator in mathOperations) {
    if (prevOperator === '÷' && parsedNumber === 0) {
      calculateTotal = Infinity;
    } else {
      calculateTotal = mathOperations[prevOperator](
        calculateTotal,
        parsedNumber
      );
    }
  }
}

function updateScreen() {
  screen.innerText = inputNumber;
}

function init() {
  document
    .querySelector('.calculator__buttons')
    .addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
