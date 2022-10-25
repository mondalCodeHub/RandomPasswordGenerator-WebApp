// console.log("scripts-starts-here | @mondalCodeHub | October 2022");

const resultElement = document.getElementById('result');
const clipboardElement = document.getElementById('clipboard');
const lengthElement = document.getElementById('length');
const uppercaseElements = document.getElementById('uppercase');
const lowercaseElements = document.getElementById('lowercase');
const numbersElements = document.getElementById('numbers');
const symbolsElements = document.getElementById('symbols');
const generateElements = document.getElementById('generate');

// randomGENFunc
const randomGENFunc = {
    lower: getRanodmLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//  generatePassword(random):
generateElements.addEventListener('click', () => {
    const lengthValue = +lengthElement.value;
    const checkLower = lowercaseElements.checked;
    const checkUpper = uppercaseElements.checked;
    const checkNumber = numbersElements.checked;
    const checkSymbol = symbolsElements.checked;

    resultElement.innerText = generatePassword(checkLower, checkUpper, checkSymbol, checkNumber, lengthValue);
    // console.log(lengthValue, checkLower, checkUpper, checkNumber, checkSymbol);
})

// 'copyToClipBoard'
clipboardElement.addEventListener('click', () => {

    const textarea = document.createElement('textarea');
    const passwordInResult = resultElement.innerText;
    if (!passwordInResult) {
        return;
    }

    textarea.value = passwordInResult;
    document.body.appendChild('textarea');
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("password-copied");
})

// 'generatePassword' :
function generatePassword(lower, upper, symbol, number, lengthValue) {
    let generatedPassword = " ";
    const typesCount = lower + upper + number + symbol;
    const typeArr = [{ lower }, { upper }, { symbol }, { number }].filter(item => Object.values(item)[0]);

    // console.log(typesCount);
    // console.log(typeArr);

    if (typesCount === 0) {
        return " ";
    }

    for (i = 0; i <= lengthValue; i += typesCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomGENFunc[funcName]();
            // console.log(funcName);
            // console.log(generatedPassword);
        })
    }
    finalPassword = generatedPassword.slice(0, lengthValue + 1)
    return finalPassword;
    console.log(finalPassword);
}

//random(lower,upper,number,symbol) -generating function
function getRanodmLowerCase() {
    const getRandomNum = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(getRandomNum);
}
function getRandomUpperCase() {
    const getRandomNum = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(getRandomNum);
}
function getRandomNumber() {
    const getRandomNum = Math.floor(Math.random() * 10) + 48;
    return String.fromCharCode(getRandomNum);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
//testing
// console.log(getRandomSymbol());

//* console.log("scripts-ends-here | @mondalCodeHub | October 2022") *//