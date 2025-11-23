let generateBtn = document.getElementById("generate-btn");
let passwordsContainer = document.querySelector(".passwords-container");
let lengthInput = document.getElementById("length-slider");
let sliderValue = document.getElementById("slider-value");
sliderValue.textContent = `Password Length: ${lengthInput.value}`;
let includeUppercase = document.getElementById("include-uppercase");
let includeNumbers = document.getElementById("include-numbers");
let includeSymbols = document.getElementById("include-symbols");

let passwordBoxes = [
    document.getElementById("password1"),
    document.getElementById("password2")
];

function updateLengthValue(value) {
    sliderValue.textContent = `Password Length: ${value}`;
}

const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

function characterPool() {
    let pool = LOWERCASE_CHARS;
    if (includeUppercase.checked) pool += UPPERCASE_CHARS;
    if (includeNumbers.checked) pool += NUMBER_CHARS;
    if (includeSymbols.checked) pool += SYMBOL_CHARS;
    return pool;
}

function generatePassword() {
    let copyElems = document.getElementsByClassName("copy-text");
    for (let elem of copyElems) {
        elem.textContent = "📋";
    }
    let length = parseInt(lengthInput.value);
    let pool = characterPool();
    let password = "";
    for (let i = 0; i < length; i += 1) {
        let randomIndex = Math.floor(Math.random() * pool.length);
        password += pool[randomIndex];
    } 
    return password;

}

function renderPasswords() {
    for (let box of passwordBoxes) {
        box.textContent = generatePassword();
    }
}

function copyToClipboard(boxId) {
    let passwordText = document.getElementById(boxId);
    if (!passwordText.textContent) return;
    navigator.clipboard.writeText(passwordText.textContent).then(() => {
        let copyElem = document.getElementById(boxId + "-copy");
        copyElem.textContent = "✅";

    });
    
}
