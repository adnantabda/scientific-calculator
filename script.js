function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;

}

function multiply(a , b){
    return a * b;
}


function divide(a , b){
    if (b === 0){
        return Infinity
    }
    else { 
        let n = (a/b)
        // n = n * 10000
        // n = Math.round(n)/10000
        return n;
    }
}

function percentage(firstOperand){
    return firstOperand / 100 
}


function operate(firstOperand , operator , secondOperand){
    if (operator === '+')
    {
        return add(firstOperand , secondOperand);
    }
    else if (operator === '-')
    {
        return subtract(firstOperand , secondOperand);
    }
    else if (operator === 'x'){
        return multiply(firstOperand , secondOperand);
    }
    else if (operator === '÷'){
        return divide(firstOperand , secondOperand)
    } 
    else if (operator === '%')
    {
        return percentage(firstOperand)
    } 
    else if (operator === '^')
    {
        return firstOperand * firstOperand
    }
}


let firstOperand = '';
let operator = '';
let secondOperand = '';
let displayValue = '' 




let numbers = document.querySelectorAll(".number")
let operatorTakers = document.querySelectorAll(".operator")
let Display = document.querySelector(".streamer")
let clear = document.querySelector(".clear")
let resultStreamer = document.querySelector(".result-streamer")


numbers.forEach((number)=>{
    number.addEventListener("click" , ()=>
        {
            if(operator == ""){
                firstOperand += number.textContent
                Display.textContent = firstOperand
                if (Display.textContent == "")
                {

                }
            }
            else
            {   Display.textContent = ""
                secondOperand += number.textContent
                Display.textContent += Display.textContent + secondOperand
                resultStreamer.textContent = operate(firstOperand , operator , secondOperand)
            }
            console.log(firstOperand)
            console.log(secondOperand)
        // Display.textContent = Display.textContent + number.textContent
    })
}) 

operatorTakers.forEach(operatorTaker =>{
    operatorTaker.addEventListener("click" , ()=>
    {
        operator += operatorTaker.textContent

        Display.textContent += operator
        console.log(operator)

    })
})



clear.addEventListener("click" , ()=>{
    Display.textContent = "";
    resultStreamer.textContent = "";
    firstOperand = '';
    secondOperand = '';
    operator = '';
})