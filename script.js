let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = (link unavailable);

        if (value === 'clear') {
            clearCalculator();
        } else if (value === 'backspace') {
            backspace();
        } else if (value === 'equals') {
            calculate();
        } else if (value === 'divide' || value === 'multiply' || value === 'subtract' || value === 'add') {
            handleOperator(value);
        } else {
            handleNumber(value);
        }

        updateDisplay();
    });
});

function clearCalculator() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
}

function backspace() {
    if (result) {
        result = result.slice(0, -1);
    } else if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
    } else if (firstNumber) {
        firstNumber = firstNumber.slice(0, -1);
    }
}

function calculate() {
    if (firstNumber && operator && secondNumber) {
        result = eval(`${firstNumber} ${operator} ${secondNumber}`);
    }
}

function handleOperator(value) {
    if (firstNumber && !secondNumber) {
        operator = value;
    }
}

function handleNumber(value) {
    if (!operator) {
        firstNumber += value;
    } else {
        secondNumber += value;
    }
}

function updateDisplay() {
    if (result) {
        display.value = result;
    } else if (secondNumber) {
        display.value = secondNumber;
    } else if (firstNumber) {
        display.value = firstNumber;
    } else {
        display.value = '';
    }
}