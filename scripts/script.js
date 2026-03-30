function handleClick(value){
    let expression = document.getElementById('display');
    if (expression.value == 0){
        expression.value = value
    } else {
        expression.value += value
    }
}

function clearDisplay(){
    let displayArea = document.getElementById('display');
    displayArea.value = 0;
}

function handleCalculate(){
    let displayArea = document.getElementById('display')
    let expression = document.getElementById('display').value;
    displayArea.value = eval(expression)
}

function backspace(){
    let displayArea = document.getElementById('display');
    if (displayArea.value.length > 1){
       displayArea.value = displayArea.value.slice(0, -1)
    } else {
        clearDisplay()
    }
}