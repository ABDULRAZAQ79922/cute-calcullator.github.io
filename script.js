let cuteCurrentInput = '';
let cuteCurrentOperation = '';
let cutePreviousInput = '';

function cuteAppendNumber(cuteNumber) {
    if (cuteCurrentOperation === '') {
        cuteCurrentInput += cuteNumber;
    } else {
        cutePreviousInput += cuteNumber;
    }
    cuteUpdateDisplay();
}

function cuteAppendOperation(cuteOperation) {
    if (cuteCurrentInput !== '') {
        cuteCurrentOperation = cuteOperation;
    }
    cuteUpdateDisplay();
}

function cuteClear() {
    cuteCurrentInput = '';
    cuteCurrentOperation = '';
    cutePreviousInput = '';
    cuteUpdateDisplay();
}

function cuteCalculate() {
    if (cuteCurrentInput !== '' && cutePreviousInput !== '' && cuteCurrentOperation !== '') {
        let cuteResult;
        switch (cuteCurrentOperation) {
            case '+':
                cuteResult = parseFloat(cuteCurrentInput) + parseFloat(cutePreviousInput);
                break;
            case '-':
                cuteResult = parseFloat(cuteCurrentInput) - parseFloat(cutePreviousInput);
                break;
            case '*':
                cuteResult = parseFloat(cuteCurrentInput) * parseFloat(cutePreviousInput);
                break;
            case '/':
                cuteResult = parseFloat(cuteCurrentInput) / parseFloat(cutePreviousInput);
                break;
            default:
                return;
        }
        cuteCurrentInput = cuteResult.toString();
        cuteCurrentOperation = '';
        cutePreviousInput = '';
    }
    cuteUpdateDisplay();
}

function cuteUpdateDisplay() {
    const cuteDisplay = document.getElementById('cuteDisplay');
    cuteDisplay.innerText = cuteCurrentInput + ' ' + cuteCurrentOperation + ' ' + cutePreviousInput;
    if (cuteCurrentInput === '' && cuteCurrentOperation === '' && cutePreviousInput === '') {
        cuteDisplay.innerText = 'Enter No';
    }
}
