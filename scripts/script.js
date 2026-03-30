function handleClick(value){
    const display = document.getElementById('display');
    if (display.value === "0"){
        display.value = "";
    } 
    if (value === "*") {
        display.value += "x";
    } else if (value === "/"){
        display.value += "÷";
    } else {
        display.value += value;
    }
}

function clearDisplay(){
    let displayArea = document.getElementById('display');
    displayArea.value = 0;
}

function handleCalculate(){
    const displayArea = document.getElementById('display')
    let expression = document.getElementById('display').value;
    
    expression = expression.replace(/x/g, "*").replace(/÷/g, "/");

    try {
        displayArea.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

function backspace(){
    let displayArea = document.getElementById('display');
    if (displayArea.value.length > 1){
       displayArea.value = displayArea.value.slice(0, -1)
    } else {
        clearDisplay()
    }
}