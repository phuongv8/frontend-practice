let calculatedTotal = 0;

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
