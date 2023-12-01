const numberButtons = document.querySelectorAll(".number");
const streamer = document.querySelector(".streamer");
const outputDs = document.querySelector(".output-ds");
const operator = document.querySelectorAll(".operator")


numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let firstOperand = button.textContent
    // const clickedNumber = button.textContent;
    streamer.textContent = streamer.textContent + firstOperand;
    operator.forEach((op)=>{
        op.addEventListener('click', ()=>{
            console.log(op.name)
            let symbol = op.textContent;
            streamer.textContent = streamer.textContent + symbol;
        })
    })
  });
});




// let operator;
let secondOperand;


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
        return a/ b;
    }
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
    else if (operator === '/'){
        return divide(firstOperand , secondOperand)
    }
}