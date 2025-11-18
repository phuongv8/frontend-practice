let generateBtn = document.getElementById("generate-btn");
let passwordsContainer = document.querySelector(".passwords-container");
let lengthInput = document.getElementById("length-slider");
let sliderValue = document.getElementById("slider-value");
sliderValue.textContent = `Password Length: ${lengthInput.value}`;

function updateLengthValue(value) {
    sliderValue.textContent = `Password Length: ${value}`;
}

