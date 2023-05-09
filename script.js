function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate (a,b,operator) {
    if (operator=="+") {
        return add(a,b);
    }

    if (operator=="-") {
        return subtract(a,b);   
    }

    if (operator=="x") {
        return multiply(a,b);       
    }

    if (operator=="/") {
        return divide(a,b);
        
    }
}

let clear=document.querySelector(".clear");
let equal=document.querySelector(".equal");
let decimal=document.querySelector(".decimal");

let numbers=document.querySelectorAll(".number");
let operators=document.querySelectorAll(".operator");

let current=document.querySelector(".current");
let previous=document.querySelector(".previous");

let currentValue='';

numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    current.textContent=currentValue;
}))

operators.forEach((op)=>op.addEventListener("click", function (e){
    handleOperator(e.target.textContent);
    previous.textContent=previousValue+" "+operator;
    current.textContent=currentValue;

}))

clear.addEventListener("click", function (){
    previousValue='';
    currentValue='';
    operator='';
    previous.textContent=currentValue;
    current.textContent=currentValue;


})

function calculate() {
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);
    previousValue=operate(previousValue,currentValue,operator);
    previousValue=roundNumber(previousValue);
    previousValue=previousValue.toString();
    currentValue=previousValue.toString();

}

equal.addEventListener("click", function (){
    calculate();
    previous.textContent="";
    current.textContent=previousValue;
    
})

function handleNumber(num) {
    if (currentValue.length<=5) {
        currentValue+=num;
    }; 
}

function handleOperator(op) {
    operator=op;
    previousValue=currentValue;
    currentValue='';
    
}


function roundNumber (n){
    return Math.round(n*1000)/1000;
}
