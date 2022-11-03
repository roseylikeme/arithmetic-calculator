
"use strict";

window.onload = init;

function init() {
    const addBtnClick = document.getElementById("addBtn");
    const subBtnClick = document.getElementById("subBtn");
    const multiplyBtnClick = document.getElementById("multiplyBtn");
    const divideBtnClick = document.getElementById("divideBtn");

    addBtnClick.onclick = onAddBtnClicked;
    subBtnClick.onclick = onSubBtnClicked;
    multiplyBtnClick.onclick = onMultiplyBtnClicked;
    divideBtnClick.onclick = onDivideBtnClicked;
}


function onAddBtnClicked() {
    // Find the HTML Elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    // Get User Inputs
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    // display results
    let sum = num1 + num2;
    const answerField = document.getElementById("answerField");
    answerField.value = sum;
}
function onSubBtnClicked() {
    // Find the HTML Elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    
    // Get User Inputs
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    // display results
    let difference = num1 - num2;
    const answerField = document.getElementById("answerField");
    answerField.value = difference;
}
function onMultiplyBtnClicked() {
    // Find the HTML Elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    
    // Get User Inputs
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    // display results
    let product = num1 * num2;
    const answerField = document.getElementById("answerField");
    answerField.value = product;
}
function onDivideBtnClicked() {
    // Find the HTML Elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    
    // Get User Inputs
    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    // display results
    let quotient = num1 / num2;
    const answerField = document.getElementById("answerField");
    answerField.value = quotient;
}