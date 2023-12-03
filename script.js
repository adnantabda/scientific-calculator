function add(a , b){
    return Number(a) + Number(b);
}

function subtract(a , b){
    return Number(a) - Number(b);

}

function multiply(a , b){
    return Number(a) * Number(b);
}


function divide(a , b){
    if (b === 0){
        alert("you can't Divide a number by zero")
        return 0
    }
    else { 
        let n = (Number(a)/Number(b))
        n = n * 100
        n = Math.round(n)/100
        return n;
    }
}

// ///////////////////////////////////////////////////////////////////////////////

function percentage(firstOperand){
    return firstOperand / 100 
}

function square(firstOperand){
    return firstOperand * firstOperand
}


//////////////////////////////////////////////////////////////////////////////////

// SPECIAL OPERATOR

function logarithm(number){
    return Map.log(number)

}

function absoluteValue(number){
    return Math.abs(number)
}

function sin(number){
    return Math.sin(number)
}

function cos(number){
    return Math.cos(number)
}


function squareRoot(number){
    return Math.sqrt(number)
}

/////////////////////////////////////////////////////////////////////////////////////


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

/////////////////////////////////////////////////////////////////////////////////////


let firstOperand = '';
let operator = '';
let secondOperand = '';


let numbers = document.querySelectorAll(".number")
let operatorTakers = document.querySelectorAll(".operator")
let Display = document.querySelector(".streamer")
let clear = document.querySelector(".clear")
let equal = document.querySelector(".equal")
let resultStreamer = document.querySelector(".result-streamer")
let specialOperators = document.querySelectorAll(".special-operator")



numbers.forEach((number)=>{
    number.addEventListener("click" , ()=>
        {
            if(operator == ""){
                firstOperand += number.textContent
                Display.textContent = firstOperand
            }
///////////////////////////////////////////////////////////////////////////////////////////////
            else
            {   
                if(secondOperand)
                {   
                   secondOperand = secondOperand + number.textContent
                   Display.textContent = firstOperand + operator + secondOperand
                } 
///////////////////////////////////////////////////////////////////////////////////// 
                else{
                    secondOperand = number.textContent
                    Display.textContent = firstOperand + operator + secondOperand
                }
            }
            console.log(firstOperand)
            console.log(secondOperand)
    })
})
//////////////////////////////////////////////////////////////////////////////////////////////

operatorTakers.forEach(operatorTaker =>{
    operatorTaker.addEventListener("click" , ()=>
    { 
        if(operator == "")
        {
            operator = operatorTaker.textContent
            Display.textContent = operate(firstOperand,operator , secondOperand) + operator
        }
        else 
        {
            operator = operatorTaker.textContent
            firstOperand = operate(firstOperand, operator , secondOperand)
            secondOperand = ''
            Display.textContent = Number(firstOperand) + operator            
        }
   
    })
})


specialOperators.forEach((specialOperator)=>{
    specialOperator.addEventListener("click" , () =>
    {
        Display.style.fontSize = "12px"
        Display.textContent = "Sorry: Special operators under Development"

            })
        })


equal.addEventListener( "click", ()=>{
    resultStreamer.textContent = operate(firstOperand , operator , secondOperand) 
})






clear.addEventListener("click" , ()=>{
    Display.textContent = "";
    resultStreamer.textContent = "";
    firstOperand = '';
    secondOperand = '';
    operator = '';
})