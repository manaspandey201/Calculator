let currentInput = '';
let displayValue = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = ''; // Prevent leading zeros
    }
    currentInput += value;
    displayValue = currentInput;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        displayValue = result.toString();
        currentInput = displayValue;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Enter|Backspace|Delete/)) {
        event.preventDefault(); // Prevent default actions for these keys
        switch (key) {
            case 'Enter':
                calculate();
                break;
            case '=':
                calculate();
                break;
            case 'Backspace':
                currentInput = currentInput.slice(0, -1);
                displayValue = currentInput || '0';
                updateDisplay();
                break;
            case 'Delete':
                clearDisplay();
                break;
            default:
                appendToDisplay(key);
                break;
        }
    }
});
