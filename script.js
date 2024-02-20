function addNumbers (a,b) {
    return a + b;
}

function subtractNumbers (a,b) {
    return a - b;
}

function multiplyNumbers (a,b) {
    return a * b;
}

function divideNumbers (a,b) {
    return a / b;
}

let numberOne = 0;
let numberTwo = 0;
let operator = '';

function operate (operator, numberOne, numberTwo) {
    if (operator === '+') {
        return addNumbers(numberOne,numberTwo);
    } else if (operator === '-') {
        return subtractNumbers(numberOne, numberTwo);
    } else if (operator === '*') {
        return multiplyNumbers(numberOne, numberTwo);
    } else if (operator === '/') {
        return divideNumbers(numberOne,numberTwo);
    }
}