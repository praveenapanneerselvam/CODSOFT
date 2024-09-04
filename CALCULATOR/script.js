const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Clear all
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
            resultDisplayed = false;
        }
        // Equals functionality
        else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
                resultDisplayed = true;
            }
        }
        // Operator functionality
        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput && !operator) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
                display.textContent = `${previousInput} ${operator}`;
            }
        }
        // Number or decimal input
        else {
            // Clear current input if result was just displayed
            if (resultDisplayed) {
                currentInput = '';
                resultDisplayed = false;
            }

            // Prevent multiple decimals
            if (value === '.' && currentInput.includes('.')) return;

            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = num2;
    }

    // Limit decimal precision to two places
    return result.toFixed(2).toString();
}
