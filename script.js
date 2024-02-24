function addNumbers (a, b) {
    return a + b;
}

function subtractNumbers (a, b) {
    return a - b;
}

function multiplyNumbers (a, b) {
    return a * b;
}

function divideNumbers (a, b) {
    return a / b;
}

let numberOne = [];
let numberTwo = [];
let operator = '';
let result = 0;

const topScreen = document.querySelector('.topScreen');
const bottomScreen = document.querySelector('.bottomScreen');

// ASSIGN INTEGER BUTTON VALUES
const buttonZero = {value: 0, class: ".zero"};
const buttonOne = {value: 1, class: ".one"};
const buttonTwo = {value: 2, class: ".two"};
const buttonThree = {value: 3, class: ".three"};
const buttonFour = {value: 4, class: ".four"};
const buttonFive = {value: 5, class: ".five"};
const buttonSix = {value: 6, class: ".six"};
const buttonSeven = {value: 7, class: ".seven"};
const buttonEight = {value: 8, class: ".eight"};
const buttonNine = {value: 9, class: ".nine"};
const buttonDecimal = {value: "." , class: ".decimal"};

const buttonIntObj = [buttonZero, buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine, buttonDecimal];

function addQuerySelectorsToIntButtons (arr) {
    arr.forEach(button => {
        button.element = document.querySelector(button.class);
        button.element.addEventListener ('click', () => {
            console.log(button.value);
            checkForZeroDecimalAndOperator(button);
        })
    });
}

function checkForZeroDecimalAndOperator (button) {
    if (!operator) {
        if(numberOne.includes('.') && button.value === ".") {
            return;
        }
        numberOne.push(button.value);
    } else if (operator) {
        if(numberOne.includes('.') === true && button.value === ".") {
            return;
        }
        numberTwo.push(button.value);
    } else {
        return;
    }
    checkForFloatInt(numberOne);
    checkForFloatInt(numberTwo);
    bottomScreen.textContent = `${numberOne.join('')} ${operator} ${numberTwo.join('')}`;
}

function checkForFloatInt (value) {
    if (value.includes('.')) {
        value = parseFloat(value.join(''));
    } else {
        value = parseInt(value.join(''));
    }
    return;
}

addQuerySelectorsToIntButtons(buttonIntObj);
//END

//ASSIGN OPERATION BUTTON VALUES
const buttonAdd  = {value: "+" , class: ".add"};
const buttonSubtract = {value: "-" , class: ".subtract"};
const buttonMultiply = {value: "*" , class: ".multiply"};
const buttonDivide = {value: "/" , class: ".divide"};

const buttonOpeObj = [buttonAdd, buttonSubtract, buttonMultiply, buttonDivide];

function addQuerySelectorsToOpeButtons (arr) {
    arr.forEach(button => {
        button.element = document.querySelector(button.class);
        button.element.addEventListener ('click', () => {
            operateIfOperatorExists();
            operator = button.value;
            bottomScreen.textContent = `${parseFloat(numberOne.join(''))}  ${operator}`;
            console.log(button.value);
        })
    })
}

function operateIfOperatorExists() {
    if (operator && numberTwo.length > 0) {
        operate(numberOne, numberTwo, operator);
    } else {
        return;
    }
}

function operate (val1, val2, operator) {
    const num1 = parseFloat(val1.join(''));
    console.log(`num1 = ${val1}`);
    const num2 = parseFloat(val2.join(''));
    console.log(`num2 = ${val2}`);

    if (operator === '+') {
        result = addNumbers(num1, num2);
    } else if (operator === '-') {
        result = subtractNumbers(num1, num2);
    } else if (operator === '*') {
        result = multiplyNumbers(num1, num2);
    } else if (operator === '/') {
        result = divideNumbers(num1, num2);
    } else {
        return;
    }
    console.log(result);
    numberOne = [result];
    numberTwo = [];
}

addQuerySelectorsToOpeButtons(buttonOpeObj);
//END

let buttonResult = document.querySelector('.result');

buttonResult.addEventListener('click', () => {
    operate(numberOne, numberTwo, operator);
    bottomScreen.textContent = result;
    operator = '';
})